import * as axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    // здесь цепляли в соц. сети, ключ, потом чуто ключ фиксированный и мы его знаем на момент
    // создание инстанса
});


// перехватывает все РЕКВЕСТЫ, КОТОРЫЕ ДЕЛАЕТ этот инстанс
axiosInstance.interceptors.request.use(async (request) => {
    request.headers.token = await repository.loadToken();
    return request;
});

axiosInstance.interceptors.response.use(async (response) => {
    //request.headers.token = await repository.loadToken();
    //return request;
    //if (status === 401) {redirect login   or show popup message}
    return response;
});


//axiosInstance.get("").then(res => res)
// 1. отправь запрос... а аксиос: сначала interseptor request запущу
// потом запрос... потом когад придёт ответ.. перед then я вызову nterceptor response, а потом уже то что в then

const api = {
    login(username, password) {

        if (username === 'Admin' && password === '123123') {
            // создаём автоматически зарезолвленны промис, зарезолвленный объектом, переданным внутрь
            return Promise.resolve({
                ok: true,
                token: '343_gfcdsvhbdnsk_vbuhjnkj'
            });
        } else {

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ok: false})
                }, 1000)
            })
        }
    },
    async getPosts(page) {
         return await axiosInstance
             .get(`posts?_page=${page}`);
    }
};

export const repository = {
    saveToken(token) {
        return localStorage.setItem('token', token);
        // return Promise.resolve()
    },
    loadToken() {
        return Promise.resolve(localStorage.getItem('token'));
        // localStorage.getItem('username')
    },
    saveUserName(username) {
        return localStorage.setItem('username', username)
    },
    async loadUserName(){
        return localStorage.getItem('username')
    },
    async clearAll(){
        return localStorage.clear()
    }
};

export default api;