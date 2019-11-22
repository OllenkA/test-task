import React from 'react';
import styles from './Profile.module.css';
import Title from "../../assets/Title/Title";
import photo from '../../assets/photo_2019-11-11_20-16-51.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const Profile = (props) => {
        let icons = props.socialIcons.map(i => {
            return <a key={i.id} className={styles.socialIcon} href={i.href}
                      target="_blank" rel="noreferrer noopener">
                <FontAwesomeIcon size={i.size} icon={i.icon}/>
            </a>
        });

            return <main className={styles.container}>
                <Title title={'PROFILE'}/>
                <article className={styles.wrapper}>
                    <figure className={styles.photoContainer}>
                        <img src={photo} alt=''/>
                    </figure>
                    <section className={styles.information}>
                        <h2>Olga Shamko</h2>
                        <div className={styles.icons}>{icons}</div>
                        <h3>I am frontend REACT.js developer</h3>
                    </section>
                </article>
                <article className={styles.education}>
                    <h3>My education</h3>
                    <ul>
                        <li>Minsk State Radio Engineering College</li>
                        <li>Belarusian State University of Informatics and Radioelectronics</li>
                        <li>IT_INCUBATOR</li>
                        <li>English - intermediate level</li>
                    </ul>
                </article>
            </main>
};

export default Profile;