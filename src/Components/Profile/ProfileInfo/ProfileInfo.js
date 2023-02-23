import React from 'react';
import styles from './ProfileInfo.module.css'
import ProfilePic from "../ProfilePic/ProfilePic";
const ProfileInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            <ProfilePic size={'big'} src={props.imgSrc}></ProfilePic>
            <div className={styles.info}>
                <h1>{props.name}</h1>
                <h3>status: {props.status}</h3>
            </div>
        </div>
    );
}

export default ProfileInfo;