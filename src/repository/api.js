import * as axios from "axios";
import {repository} from "./repository";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

axiosInstance.interceptors.request.use(async (request) => {
    // add token to every request for authorization
    request.headers.token = await repository.loadToken();
    return request;
});

axiosInstance.interceptors.response.use(async (response) => {
    //request.headers.token = await repository.loadToken();
    //return request;
    //if (status === 401) {redirect login   or show popup message}
    return response;
});

const api = {
    login(username, password) {
        if (username === 'Admin' && password === '123123') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ok: true,
                        token: "sdds23w23##$SDS%_s"
                    })
                }, 1000)
            })
        } else {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ok: false})
                }, 1000)
            })
        }
    },
    async getPosts(page) {
        let response = await axiosInstance
             .get(`posts?_page=${page}`);
        return response.data;
    }
};

export default api;