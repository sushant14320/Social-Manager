import React from 'react';
import {Link} from'react-router-dom';
import './bootstrap.min.css'
import './Home.css';
import pic from './images/allapps.jpg'
import smoke from './images/smoke.mp4'
import land from './images/land3.jpg'
import mp from './images/mulplt.jpg'
import aa from './images/aa.jpg'


class Home extends React.Component{
    render(){
        return(
            <div className='landing'>

                <div className="landimg">
                 <img src={land} alt='img' />
                 </div>
                 <div className="Title">
                     Socio
                 </div>

              <div className='navbar'>
                           
                <ul className="main-nav">
                                <li><Link className='login l1' to='/Login'>Login</Link></li>
                                <li><Link className='login l1' to='/Signup'>Signup</Link></li>
                </ul>
                 </div>
                    <div className='mainhead'>
                    <h1>Now post anything on all your apps in <br/>  a single click</h1>
                    </div>
                    <div className='allapps'>
                        <img src={pic} alt='all-apps' />
                    </div>
                     

                    <div className="tagline">
                                <div className='desc-head'>
                                   <h2><u>Create once &mdash; Post twice</u></h2>
                                </div>
                                <div className='long-description'>
                                   <p>
                                    Hello , we're SOCIO, your new social media management companion. We know you're always busy,
                                    No time for creating the same post again and again. So let us take care of that.....
                                   </p>
                                </div>
 

                    <div className='feature'>
                             <div className='feature1'>
                             <img src={mp} alt='multiple-platforms' id="mp" />
                                    <h3><u>Multiple Platforms !</u></h3> <br/>
                                    <p>
                                    You can find social media platforms here
                                    like facebook and twitter, we have included these two famous
                                    social media platforms
                                    </p>
                             </div>  

                             <div className='feature2'>
                             <img src={aa} alt='anywhere-anytime' id="aa" />
                                <h3><u>Anywhere Anytime !</u></h3><br/>
                                <p>
                                    No need to switch between devices and accounts.
                                    You can create your content anywhere on any device
                                </p>
                            </div>
                    </div>                   
                    </div>            
                  
    
            </div>
        )
    }
}

export default Home;