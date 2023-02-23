import React from 'react';
import styles from './Profile.module.css'

const ProfileInfo = () => {
    return (
        <h2>profile info</h2>
    );
}
const Posts = () => {
    return (
        <h2>posts</h2>
    );
}
const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};

export default Profile;