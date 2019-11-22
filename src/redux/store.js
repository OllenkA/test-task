import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import postReducer from "./post-reducer";
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    post: postReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

// window.store = store;

export default store;


