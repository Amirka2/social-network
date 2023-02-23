import React from 'react';
import styles from './Post.module.css'
import {useState} from "react";

let flag = false;

const Post = (props) => {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        if (!flag) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
        flag = !flag;
    }
    return (
        <div className={styles.wrapper}>
            <p>{props.text}</p>
            <div className={styles.like} onClick={handleLike}>{likes}&#128077;</div>
        </div>
    );
};

export default Post;