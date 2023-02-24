import React from 'react';
import styles from './Posts.module.css'
import Post from "./Post/Post";

const postData = [
    {id: 1, text: '1 post'},
    {id: 2, text: '2 post'},
    {id: 3, text: '3 post'},
    {id: 4, text: '4 post'},
    {id: 5, text: '5 post'},
]
const postElements =
    postData.map(post => <Post text={post.text}></Post>);

const Posts = () => {
    return (
        <div className={styles.wrapper}>
            { postElements }
        </div>
    );
}

export default Posts;