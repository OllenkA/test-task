import React from 'react';
import {Field, reduxForm} from "redux-form";
import styles from './LoginForm.module.css';


const LoginForm = (props) => {

    return <form onSubmit={props.handleSubmit} className={styles.form}>
        <Field className={styles.field} name={'email'}
               placeholder={'Email'} component={'input'}/>
        <Field className={styles.field} name={'password'}
               placeholder={'Password'} type={'password'} component={'input'}/>
        <button className={styles.field}>
            Log in
        </button>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default LoginReduxForm;