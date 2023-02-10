import React from 'react';
import styles from './HeaderButton.module.css';

function HeaderButton(props) {
    return (
        <div className={styles.wrapper}>
            <a href={"#"}>{props.name}</a>
        </div>
    );
}

export default HeaderButton;