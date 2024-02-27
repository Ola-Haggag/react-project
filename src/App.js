import logoAkla from './logoweb.jpg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn , faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faBars} from '@fortawesome/free-solid-svg-icons';

import {BrowserRouter} from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link"
import Skills from"./Components/Skills"
import Projects from "./Components/Projects"
import Connect from './Components/Connect';
import Home from './Components/Home';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const ToLinkedin = () => {
    window.open('https://www.linkedin.com/in/ola-haggag/' , '_blank')
  };

  return (
    <BrowserRouter>
      <div className="App">
        <img src={logoAkla} className='App-logo' alt='logo'/>

        <div className='responsive' tabindex="0"><FontAwesomeIcon icon={faBars} style={{ color: "white", fontSize: '30px'}} /></div>

        <header className='App-header'>
          <Link style={{textDecoration: 'none', color : 'white' ,fontSize : '22px'}}  to="#home">Home</Link>   
          <Link style={{textDecoration: 'none' , color : 'white' ,fontSize : '22px'}}  to="#skills">Skills</Link>
          <Link style={{textDecoration: 'none' , color : 'white' ,fontSize : '22px'}}  to="#projects">Projects</Link>
          <div className='iconmedia'><FontAwesomeIcon className='iconitself'  icon={faLinkedinIn} onClick={ToLinkedin} /> </div> 
          <div className='iconmedia'><FontAwesomeIcon className='iconitself'   icon= {faFacebookF}/></div>
          <div className='iconmedia'><FontAwesomeIcon className='iconitself'   icon= {faInstagram} /></div>
          <button id="#connect" className='connectbtn'><span className='connectword'>Let's Connect</span></button>
        </header>

    
        <Home/>
        <Skills/>
        <Projects/>
        <Connect/>
      </div>
    </BrowserRouter>
  );
}

export default App;
