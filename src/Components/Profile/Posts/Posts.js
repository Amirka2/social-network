import React from 'react';
import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    const postElements =
        props.postData.map(post => <Post text={post.text}></Post>);
    return (
        <div className={styles.wrapper}>
            { postElements }
        </div>
    );
}

export default Posts;