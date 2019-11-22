import React from 'react';
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import {logout} from "../redux/auth-reducer";


function HeaderContainer(props) {

    return <Header {...props}/>
}


const mapStateToProps = (state) => ({
    userName: state.auth.userName,
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {logout})(HeaderContainer);