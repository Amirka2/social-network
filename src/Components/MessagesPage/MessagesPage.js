import React from 'react';
import styles from './MessagesPage.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Route, useLocation} from "react-router-dom";


let active;
const chooseActiveDialog = () => {
    let dialogs = document.getElementsByClassName('.dialog');
    for (const dialog of dialogs) {
        if (dialog.className.includes('active'))
            active = dialog;
    }
}

const MessagesPage = (props) => {
    chooseActiveDialog();
    let dialogs = props.messagesData.dialogsData.map(d => {
        return (
            <DialogItem className={styles.dialog} name={d.name} dialogId={d.id}/>
        );
    })
    const Messages = props.messagesData.messagesData.map(m => {
        m.messages.map(text => <Message text={text}/>);
    })
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs} id='dialogs'>
                { dialogs }
            </div>
            <div className={styles.messages}>
                {/*<Route element={<Messages/>}/>*/}
            </div>
        </div>
    );
};

export default MessagesPage;