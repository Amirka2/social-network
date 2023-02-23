import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from "./Posts/Posts";
import img from '../Content/imgs/dickSucker.png'
const Profile = () => {
    return (
        <div className={styles.wrapper}>
            <ProfileInfo name={'Гриша'} status={'fucked up'} imgSrc={img}/>
            <Posts/>
        </div>
    );
};

export default Profile;