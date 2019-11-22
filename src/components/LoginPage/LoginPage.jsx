import React from 'react';
import styles from './LoginPage.module.css';
import Title from "../../assets/Title/Title";
import LoginReduxForm from "./LoginForm/LoginForm";


const LoginPage = (props) => {
    return <main className={styles.container}>
        <Title title={'LOGIN'}/>
        <LoginReduxForm onSubmit={props.onSubmit}/>
        <div>
            {props.error !== null
                ? props.error
                : null}
        </div>
    </main>
};


export default LoginPage;