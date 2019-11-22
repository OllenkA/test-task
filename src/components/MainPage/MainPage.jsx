import React from 'react';
import styles from './MainPage.module.css';
import Title from "../../assets/Title/Title";


const MainPage = (props) => {

    const changeLanguage = () => {
        props.changeLanguage(props.language === 'en' ? 'ru' : 'en');
    };

    let articles = {
        'en': <article>
            <h3>Test task</h3>
            <p>Implement an application that can display the following pages:</p>
            <ul>
                <li>/ - main</li>
                <li>/login - login page and password</li>
                <li>/posts - any similar information, you can use for example jsonplaceholder.
                    Optional: Implement infinity scrolling for / posts
                </li>
                <li>/profile - страница с произвольным текстом, недоступная без авторизации</li>
            </ul>
            <p>On the site, in the header, implement links:</p>
            <ul>
                <li>Main (/)</li>
                <li>Posts (/posts)</li>
                <li>Profile (/profile)</li>
            </ul>

            <p>If the user clicks on the “profile” page and he is not “authorized” - throw on the page
                /login</p>
            <p>The login form (/ login) accepts fake data:</p>
            <ul>
                <li className={styles.fake}>username: Admin</li>
                <li className={styles.fake}>password: 123123</li>
            </ul>
            <p>If other data is entered, then the message is displayed: "Username or password not entered
                right"</p>
            <p>If the correct data are entered, then redirect to the page /profile</p>
            <p>User authorization information can be stored in localStorage. Database does not implement
                necessary.
                The request for / posts, an attempt to log in is to forward through Redux.
            </p>
            <p>Design is not important. Make it so that you can comfortably watch an example in a browser.</p>
        </article>,
        'ru': <article>
            <h3>Задача</h3>
            <p>Реализовать приложение, которое умеет показывать следующие страницы:</p>
            <ul>
                <li>/ - главная</li>
                <li>/login - страница ввода логина и пароля</li>
                <li>/posts - любая однотипная информация, можно воспользоваться например jsonplaceholder.
                    Дополнительно: Реализовать бесконечную прокрутку для /posts
                </li>
                <li>/profile - страница с произвольным текстом, недоступная без авторизации</li>
            </ul>
            <p>На сайте, в шапке реализовать ссылки:</p>
            <ul>
                <li>Главная (/)</li>
                <li>Новости (/posts)</li>
                <li>Профиль (/profile)</li>
            </ul>

            <p>Если пользователь кликает на страницу “профиля” и он не “авторизован” -
                перекидывать на страницу /login</p>
            <p>Форма входа (/login) принимает “фейковые” данные:</p>
            <ul>
                <li className={styles.fake}>username: Admin</li>
                <li className={styles.fake}>password: 123123</li>
            </ul>
            <p>
                Если введены другие данные, то показывается сообщения: "Имя пользователя или пароль введены не
                верно"
            </p>
            <p>Если введены корректные данные, то перебрасывать на страницу /profile</p>
            <p>Информацию об авторизации пользователя можно хранить в localStorage. Базу данных реализовать не
                нужно.
                Запрос для /posts, попытку залогиниться - пробросить через Redux.
            </p>
            <p>Дизайн — не важно. Сделайте, чтобы можно было комфортно смотреть пример в браузере.</p>
        </article>
    };

    return <main className={styles.container}>
        <Title title={'MAIN'}/>
        <article className={styles.wrapper}>
            <button onClick={changeLanguage} className={styles.button}>
                {props.language === 'ru' ? 'translate to english' : 'translate to russian'}
            </button>
            { articles[props.language] }
        </article>
    </main>
};


export default MainPage;
