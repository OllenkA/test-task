import React from 'react';
import styles from './Posts.module.css';


const Posts = (props) => {
    return <div className={styles.post}>
        <h3 className={styles.title}>
            {props.title[0].toUpperCase() + props.title.slice(1)}
        </h3>
        <p className={styles.text}>
            {props.body[0].toUpperCase() + props.body.slice(1)}
        </p>
    </div>
};

export default Posts;