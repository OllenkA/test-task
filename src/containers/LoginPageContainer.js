import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {login} from "../redux/auth-reducer";
import LoginPage from "../components/LoginPage/LoginPage";


class LoginPageContainer extends Component {
    onSubmit = (formData) => {
        this.props.login(formData.email, formData.password);
    };

    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/'}/>
        } else {
            return <LoginPage isAuth={this.props.isAuth}
                              error={this.props.error}
                              login={this.props.login}
                              onSubmit={this.onSubmit}/>
        }
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error,
});

export default connect(mapStateToProps, {login})(LoginPageContainer);