import React from 'react'
import styles from './SideMenu.module.css'
import menuIcon from './imgs/menuIcon.png'
import {NavLink} from 'react-router-dom'

export default function SideMenu() {
  return (
            <div className={styles.wrapper}>
                <div className={styles.desktop}>
                    <div><NavLink className={styles.link} to='/' className={({isActive}) =>`${isActive ? styles.active : ''}`}>main</NavLink></div>
                    <div><NavLink className={styles.link} to='/profile' className={({isActive}) =>`${isActive ? styles.active : ''}`}>profile</NavLink></div>
                    <div><NavLink className={styles.link} to='/messages' className={({isActive}) =>`${isActive ? styles.active : ''}`}>messages</NavLink></div>
                </div>
                {/*<div className={styles.mobile}>
                    <img src={menuIcon}></img>
                     <ul className={`${styles.menu} ${mobile ? '' : '.hidden'}`}>
                <li><a href='/footer'>Footer</a></li>
                <li><a href='/header'>Header</a></li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
                </div>*/}
            </div>
  )
}
