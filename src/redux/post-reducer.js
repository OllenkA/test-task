import api from "../repository/api";

const GET_POSTS_SUCCESS = 'ARTICLES/GET_POSTS_SUCCESS';
const CLEAR_POSTS = 'ARTICLES/CLEAR_POSTS';
const SET_LOADING = 'ARTICLES/SET_LOADING';

const initialState = {
    posts: [],
    currentPage: 1,
    loading: false,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_SUCCESS: {
            return {
                ...state,
                posts: [...state.posts, ...action.posts],
                currentPage: state.currentPage + 1,
            }
        }
        case CLEAR_POSTS: {
            return {
                ...state,
                posts: [],
                currentPage: 1,
            }
        }
        case SET_LOADING:{
            return {
                ...state,
                loading: action.value,
            }
        }

        default:
            return state;
    }
};

export const getPosts = () => async (dispatch, getState) => {
    const page = getState().post.currentPage;
    dispatch(setLoading(true));
    const posts = await api.getPosts(page);
    dispatch(getPostsSuccess(posts));
    dispatch(setLoading(false))
};

export const getPostsSuccess = (posts) => ({type: GET_POSTS_SUCCESS, posts});
export const clearPosts = () => ({type: CLEAR_POSTS});
export const setLoading = () => ({type: SET_LOADING});

export default postReducer;