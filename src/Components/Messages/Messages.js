import React from 'react';
import styles from './Messages.module.css'

let data = {
    "Dima": ["Hi", "it's me"],
    "Eugene": ["Hi", "what's up?"],
}

const Messages = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                <div className={styles.dialog}>x</div>
                <div className={styles.dialog}>x</div>
                <div className={styles.dialog}>x</div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>hi</div>
                <div className={styles.message}>hi</div>
            </div>
        </div>
    );
};

export default Messages;