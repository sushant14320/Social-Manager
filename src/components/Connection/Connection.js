import React from 'react';
// import { Button } from 'antd'
import './Connection.css';
import { login as FacebookLogin } from '../../services/auth';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faFacebook} from "@fortawesome/free-brands-svg-icons" 
import fbimg from '../images/fbicon.jpg';
import emoji from '../images/smiley.jpg';

export default function index() {

  const login = () => {
    FacebookLogin()
  }
  return (
    <div className="Main">

    <div className="fbbtn">
    <button id="Connect" 
    
    style={{  background: '#2e4a86',position: 'relative',top:'60px', left:'280px',width:'200px'   }}
    
    
    
    type="button" onClick={login}>Connect facebook</button>
    </div>

    <div className="Connectbtn">
    <img src={fbimg} alt="logo" id='fblogo'/>
    </div>

    <div className="msg">
    <p>Log in to your facebook account to start...<br/> </p>
    <p id="hpst">Happy Posting !!!!!</p>
    <img src={emoji} alt="smiley" id="emoji"/>
    </div>
    </div>
  )
}
