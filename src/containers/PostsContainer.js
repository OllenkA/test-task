import React, {Component} from 'react';
import styles from '../components/Posts/Posts.module.css';
import Title from "../assets/Title/Title";
import {connect} from "react-redux";
import {getPosts, clearPosts} from "../redux/post-reducer";
import Posts from "../components/Posts/Posts";


class PostsContainer extends Component {
    sectionRef = React.createRef();

    componentDidMount() {
        this.props.getPosts();
        document.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        this.props.clearPosts();
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        let block = this.sectionRef.current;
        let contentHeight = block.offsetHeight;      // 1) высота блока контента вместе с границами
        let yOffset = window.pageYOffset;      // 2) текущее положение скролбара
        let window_height = window.innerHeight;      // 3) высота внутренней области окна документа
        let y = yOffset + window_height;
        // если пользователь достиг конца страницы
        if (y >= contentHeight) {
            if (!this.props.loading) {
                this.props.getPosts();
            }
        }
    };

    render() {
        const {posts = []} = this.props;
        let postsElements = posts.map(p => {
            return <Posts key={p.id} title={p.title} body={p.body}/>
        });

        return (
            <article className={styles.container}>
                <Title title={'POSTS'}/>
                <section className={styles.wrapper} ref={this.sectionRef}>
                    {postsElements}
                    {this.props.loading && <span className={styles.loading}>LOADING...</span>}
                </section>
            </article>
        );
    }
}

let mapStateToProps = (state) => ({
    posts: state.post.posts,
    loading: state.post.loading,
});

export default connect(mapStateToProps, {getPosts, clearPosts})(PostsContainer);