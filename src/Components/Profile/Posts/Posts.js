import React from 'react';
import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={styles.wrapper}>
            <Post text={'1 post'}></Post>
            <Post text={'2 post'}></Post>
            <Post text={'3 post'}></Post>
            <Post text={'4 post'}></Post>
        </div>
    );
}

export default Posts;