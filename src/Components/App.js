import './App.css';
import styles from './App.module.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import {BrowserRouter} from "react-router-dom";

// document.getElementsByClassName('dialog').onclick = function (e) {
//     for (let dialog of document.getElementsByClassName('dialog')) {
//         if (dialog.classList.contains('active'))
//             dialog.classList.remove('active');
//         if (dialog.id === e.id)
//             dialog.classList.add('active');
//     }
// }

function App(props) {
  return (
      <BrowserRouter>
      <div className="App">
        <div className={styles.wrapper}>
          <Header></Header>
          <div style={{display: "flex", "justify-content": "space-between"}}>
              <SideMenu></SideMenu>
              <Content postData={props.postData} messagesData={props.messagesData}></Content>
          </div>
          <Footer></Footer>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
