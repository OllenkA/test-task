import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


function Header(props) {
    return <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to='/'>
                    MAIN
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.activeLink} to='/profile'>
                    PROFILE
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.activeLink} to='/posts'>
                    POSTS
                </NavLink>
            </div>
            <div className={styles.item}>
                {props.isAuth ?
                    <div>{props.userName} -
                        <button onClick={props.logout}>
                            Log out
                        </button>
                    </div>
                    : <NavLink to='/login'>
                        LOGIN
                    </NavLink>}
            </div>
        </nav>
    </header>
}

export default Header;