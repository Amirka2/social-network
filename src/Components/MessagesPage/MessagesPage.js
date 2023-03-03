import React from 'react';
import styles from './MessagesPage.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Route, useLocation} from "react-router-dom";
import message from "./Message/Message";


let dialogsData = [
    { id: 0, name: "Dima"},
    { id: 1, name: "Eugene"},
]
let messagesData = [
    { id: 0, name: "Dima", messages: ["Hi", "it's me"] },
    { id: 1, name: "Eugene", messages: ["Hi", "what's up?"] },
]
let dialogs = dialogsData.map(d => <DialogItem className={styles.dialog} name={d.name} dialogId={d.id}/>)
let active;
const chooseActiveDialog = () => {
    let dialogs = document.getElementsByClassName('.dialog');
    for (const dialog of dialogs) {
        if (dialog.className.includes('active'))
            active = dialog;
    }
}
const Messages = messagesData.map(m => {
    if (m.id === 1) {
        m.messages.map(text => <Message text={text}/>);
    }
})

const MessagesPage = () => {
    chooseActiveDialog();
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs} id='dialogs'>
                { dialogs }
            </div>
            <div className={styles.messages}>
                <Route element={<Messages/>}/>
            </div>
        </div>
    );
};

export default MessagesPage;