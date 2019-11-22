import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Profile from "../components/Profile/Profile";


const ProfileContainer = (props) => {

    if(props.isAuth === false){return <Redirect to={'/login'}/>}
    return <Profile {...props}/>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    socialIcons: state.auth.socialIcons,
});

export default connect(mapStateToProps, {})(ProfileContainer);