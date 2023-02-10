import './App.css';
import styles from './App.module.css'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Content from './Content/Content'
import Footer from './Footer/Footer'

function App() {
  return (
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
  );
}

export default App;
