import React from 'react'
import styles from './Content.module.css'
import dickSucker from './dickSucker.png'

export default function Content() {
  return (
    <div className={styles.wrapper}>
        <img className={styles.dickSucker} src={dickSucker} alt="dickSucker"></img>
    </div>
  )
}
