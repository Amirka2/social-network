import React from 'react';
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={styles.dialogItem}><NavLink to={'/messages/' + props.dialogId}> {props.name} </NavLink></div>
    );
}

export default DialogItem;