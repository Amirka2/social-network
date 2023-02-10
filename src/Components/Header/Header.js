import React from 'react'
import styles from './Header.module.css'
import HeaderButton from "./HeaderButton/HeaderButton";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
        <HeaderButton name={"Главная"}></HeaderButton>
        <HeaderButton name={"Войти"}></HeaderButton>
    </div>
  )
}
