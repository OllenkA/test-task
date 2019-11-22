import React, {Component} from 'react';
import styles from '../components/Posts/Posts.module.css';
import Title from "../assets/Title/Title";
import {connect} from "react-redux";
import {getPosts, clearPosts} from "../redux/post-reducer";
import Posts from "../components/Posts/Posts";


class PostsContainer extends Component {
    componentDidMount() {
        this.props.getPosts(this.props.currentPage);
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        this.props.clearPosts();
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        let block = document.getElementById('showScroll');
        let contentHeight = block.offsetHeight;      // 1) высота блока контента вместе с границами
        let yOffset       = window.pageYOffset;      // 2) текущее положение скролбара
        let window_height = window.innerHeight;      // 3) высота внутренней области окна документа
        let y             = yOffset + window_height;
        // если пользователь достиг конца
        if(y >= contentHeight) {
            if(!this.props.loading){
            this.props.getPosts(this.props.currentPage);}
            // contentHeight = contentHeight *2;
            // подгрузить новые посты
        }
    };

    render() {
        let posts = this.props.posts &&
            this.props.posts.map(post => {
                return <Posts key={post.id} title={post.title} body={post.body}/>
            });
        return (
            <article className={styles.container}>
                <Title title={'POSTS'}/>
                <section className={styles.wrapper} id='showScroll'>
                    {posts}
                </section>
            </article>
        );
    }
}

let mapStateToProps = (state) => ({
    posts: state.post.posts,
    currentPage: state.post.currentPage,
    loading: state.post.loading,
});

export default connect(mapStateToProps, {getPosts, clearPosts})(PostsContainer);