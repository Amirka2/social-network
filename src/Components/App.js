import './App.css';
import styles from './App.module.css'
import styles1 from './Content/Content.module.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";
import dickSucker from "./Content/imgs/dickSucker.png";

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}
function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <div className={styles.wrapper}>
          <Header></Header>
          <div style={{display: "flex", "justify-content": "space-between"}}>
              <SideMenu></SideMenu>
              <Content></Content>
          </div>
          <Footer></Footer>
        </div>
      </div>
      </BrowserRouter>
  );
}

export default App;
