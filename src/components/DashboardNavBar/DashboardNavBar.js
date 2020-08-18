import React, { Component } from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
}
from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//import SchedulePost from '../SchedulePost/SchedulePost'

import PastPost from '../PastPost/PastPost'
import Schedule from '../Schedule/Schedule'
import Redirec from '../Redirect/Redirect'
import User from '../user/user';



import './DashboardNavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faEdit,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
//import SwitchMode from '../SwitchMode/SwitchMode';
import {   
    ThemeProvider,
}from '@material-ui/core';
import Default from '../Default/Default';
class DashboardNavBar extends Component 
{
 constructor(){
    super();
    this.state = {
      index: ''
    }
 }
 tabA = () =>{
  this.setState({
    index:0
  })
}

tabB = () =>{
this.setState({
  index:1
})
}

Default = () =>{
  this.setState({
    index:2
  })
  }
 
UserInfo = () =>{
    this.setState({
      index:3
    })
  } 

 renderTab(){
  switch(this.state.index){
   
     case 0: return <Schedule/>
     case 1: return <PastPost/> 
     case 2: return <Redirec/>
     case 3: return <User/>
     default:
      return <Default/>;
  }
}
    render() { 


 return (    
 <ThemeProvider>
   <div className="sidemain">
  <div className='sideNav'> 


<Router>

    <div className="sidemenu">
      <ul id='menu'>

                    
                    <li className='menu-li'>
                          <FontAwesomeIcon icon={faUser} className='fa-lg'/>
                          <Link onClick={this.UserInfo} id='menu-item'>User</Link>
                    </li>

                  <br></br>

                    <li className='menu-li'>
                          <FontAwesomeIcon icon={faEdit}  className='fa-lg' />
                          <Link onClick={this.Default} id='menu-item'>Create Post</Link>
                    </li> 

                    <br></br>

                    
                          <li className='menu-li'>
                                <FontAwesomeIcon icon={faCalendar}  className='fa-lg' id='menu-icon' />
                                <Link onClick={this.tabA} id='menu-item' >Scheduled Post</Link>
                          </li>
                    
                    <br></br>
                   
                    <li className='menu-li'>
                          <FontAwesomeIcon icon={faClock}  className='fa-lg'/>
                          <Link onClick={this.tabB} id='menu-item'>Past Post</Link>
                    </li>
                    
                    <br></br>
        
     </ul>
     </div>
    
   </Router> 
   <div id="MainContent">
           {this.renderTab()}
    </div>
  </div>
   </div>
  </ThemeProvider>

  );
    }
}
 
export default DashboardNavBar;