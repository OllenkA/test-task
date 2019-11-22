import api from "../repository/api";

const SET_POST = 'SET_POST';
const CLEAR_POSTS = 'CLEAR_POSTS';
const SET_LOADING = 'SET_LOADING';

const initialState = {
    posts: [],
    currentPage: 1,
    loading: false,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST: {
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
                loading: !state.loading,
            }
        }

        default:
            return state;
    }
};

export const getPosts = (page) => async (dispatch) => {
    dispatch(setLoading());
    const result = await api.getPosts(page);
    if (result.status === 200) {
        dispatch(setPost(result.data))
    }
    dispatch(setLoading())
};

export const setPost = (posts) => ({type: SET_POST, posts});
export const clearPosts = () => ({type: CLEAR_POSTS});
export const setLoading = () => ({type: SET_LOADING});

export default postReducer;