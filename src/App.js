import React, {useEffect} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {checkAuthorization} from "./redux/auth-reducer";
import {connect} from "react-redux";
import PostsContainer from "./containers/PostsContainer";
import MainPageContainer from "./containers/MainPageContainer";
import HeaderContainer from "./containers/HeaderContainer";
import ProfileContainer from "./containers/ProfileContainer";
import LoginPageContainer from "./containers/LoginPageContainer";


function App(props) {
    useEffect(() => {
        props.checkAuthorization()
    }, [props.checkAuthorization]);

    return (
        <main className="App">
            <HeaderContainer/>
            <Route exact path='/' render={() => <MainPageContainer/>}/>
            <Route path='/posts' render={() => <PostsContainer/>}/>
            <Route exact path='/profile' render={() => <ProfileContainer/>}/>
            <Route path='/login' render={() => <LoginPageContainer/>}/>
        </main>
    );
}

export default connect(null, {checkAuthorization})(App);