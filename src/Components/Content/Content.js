import React from 'react'
import styles from './Content.module.css'
import dickSucker from './imgs/dickSucker.png'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Messages from "../Messages/Messages";
import Profile from '../Profile/Profile'

function Home(){ return <h2>Главная</h2>; }

export default function Content() {
  return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                </Routes>
                <img className={styles.dickSucker} src={dickSucker} alt="dickSucker"></img>
            </div>
        </BrowserRouter>
  )
}
