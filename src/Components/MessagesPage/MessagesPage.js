import React from 'react';
import styles from './MessagesPage.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

let data = {
    "Dima": ["Hi", "it's me"],
    "Eugene": ["Hi", "what's up?"],
}

const MessagesPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                <DialogItem name={'Dima'} id={0}></DialogItem>
                <DialogItem name={'Eugene'} id={1}></DialogItem>
                <DialogItem name={'Sasha'} id={2}></DialogItem>
                <DialogItem name={'xx'} id={3}></DialogItem>
            </div>
            <div className={styles.messages}>
                <Message text={'hi'}></Message>
                <Message text={'hi'}></Message>
                <Message text={'hi'}></Message>
            </div>
        </div>
    );
};

export default MessagesPage;