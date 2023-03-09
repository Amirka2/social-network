import React from 'react'
import styles from './Content.module.css'
import {Route, Routes} from "react-router-dom";
import MessagesPage from '../MessagesPage/MessagesPage';
import Profile from '../Profile/Profile'


function Home(){ return <h2>Главная</h2>; }

export default function Content(props) {
  return (
      <div className={styles.wrapper}>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile postData={props.postData}/>}/>
              <Route path='/messages' element={<MessagesPage messagesData={props.messagesData}/>}/>
          </Routes>
      </div>
  )
}
