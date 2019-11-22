import api, {repository} from "../repository/api";
import {faFacebook, faGithub, faGoogle, faLinkedin, faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";

const LOGIN_SUCCESS = 'ARTICLES/LOGIN_SUCCESS';
const LOGIN_ERROR = 'ARTICLES/LOGIN_ERROR';
const LOG_OUT = 'ARTICLES/LOG_OUT';

const initialState = {
    socialIcons: [
        {id: 1, href: 'https://www.facebook.com/profile.php?id=100002374038626', size: '2x', icon: faFacebook},
        {id: 2, href: 'https://www.linkedin.com/in/olga-shamko-153715191/', size: '2x', icon: faLinkedin},
        {id: 3, href: 'https://vk.com/id11395420', size: '2x', icon: faVk},
        {id: 4, href: 'https://t.me/Ollenka_Shamko', size: '2x', icon: faTelegram},
        {id: 5, href: 'https://github.com/OllenkA', size: '2x', icon: faGithub},
        {id: 6, href: 'https://shamko.olga2018@gmail.com', size: '2x', icon: faGoogle},

    ],
    isAuth: false,
    error: null,
    userName: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                userName: action.username,
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                error: 'The username or password entered is incorrect',
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isAuth: false,
                userName: null,
                error: null,
            }
        }
        default:
            return state;
    }
};

// залогиниваемся if - если пароль и юзернейм проходят проверку диспатчим loginSuccess
// иначе loginError
export const login = (username, password) => async (dispatch) => {
    const result = await api.login(username, password);
    if (result.ok) {
        repository.saveToken(result.token);
        repository.saveUserName(username);
        dispatch(loginSuccess(username))
    } else {
        dispatch(loginError())
    }
};

export const logout = () => async (dispatch) => {
    // выолгиниваемся, просто зачистив токен у себя и изменив стейт...
    await repository.clearAll();
    dispatch(logOut())
};

export const checkAuthorization = () => async (dispatch) => {
    const token = await repository.loadToken();

    if (token) {
        const username = await repository.loadUserName();
        dispatch(loginSuccess(username))
    }
};

export const loginSuccess = (username) => ({type: LOGIN_SUCCESS, username});
export const loginError = () => ({type: LOGIN_ERROR});
export const logOut = () => ({type: LOG_OUT});

export default authReducer;