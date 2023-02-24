import React from 'react';
import styles from './ProfilePic.module.css'

const ProfilePic = (props) => {
    let size = props.size === 'big' ? styles.big : styles.small;
    return (
        <div className={styles.wrapper + ' ' + size}>
            <img src={props.src} alt="" className={size}/>
        </div>
    );
};

export default ProfilePic;