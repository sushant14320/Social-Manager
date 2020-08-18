import React from 'react';
import '../DashboardNavBar/DashboardNavBar.css';
import DashboardNavBar from '../DashboardNavBar/DashboardNavBar';
import Header from '../DashboardHeader/Header';
//import DashboardNavBar from './DashboardNavBar';
//import './Header.css';
import '../DashboardHeader/Header.css';
//import demou2 from './images/demou2.svg';
//import DashboardFooter from './DashboardFooter';
import DashboardFooter from '../DashboardFooter/DashboardFooter';
function Dashboard ()
{
            // User information Navbar 
 let UserInfo=<div className='userInfo'>
                 <Header/>
        </div>

        return (
 <div>
   {/* To Display User img & name */}
         {UserInfo}
<DashboardNavBar></DashboardNavBar>
<DashboardFooter/> 
</div>);
    
}
 
export default Dashboard;