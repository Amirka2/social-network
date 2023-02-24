import React from 'react';
import styles from './MessagesPage.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

let dialogsData = [
    { id: 0, name: "Dima"},
    { id: 1, name: "Eugene"},
]
let messagesData = [
    { id: 0, name: "Dima", messages: ["Hi", "it's me"] },
    { id: 1, name: "Eugene", messages: ["Hi", "what's up?"] },
]
let dialogs = dialogsData.map(d => <DialogItem className={styles.dialog} name={d.name} id={d.id}/>)
let active;
const chooseActiveDialog = () => {
    let dialogs = document.getElementsByClassName('.dialog');
    for (const dialog of dialogs) {
        if (dialog.className.includes('active'))
            active = dialog;
    }
}
const messages = () => {
    let activeDialog = active;
    let dialog = messagesData.find(dialog => {
        if (dialog.id === activeDialog.id)
            return dialog;
    });
    dialog.messages.map(m => <Message text={m}/>);
}

const MessagesPage = () => {
    chooseActiveDialog();
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs} id='dialogs'>
                { dialogs }
            </div>
            <div className={styles.messages}>
                { messages }
            </div>
        </div>
    );
};

export default MessagesPage;