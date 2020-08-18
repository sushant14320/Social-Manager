import React ,{Component} from 'react';
import './Dashboardinfo.css'
import cp from '../images/createpost.jpg'
import sp from '../images/schedule.jpg'
import pp from '../images/pastpost.jpg'


class Dashboardinfo extends Component{
    render(){
        return(
            <div classname="maininfo">

                <div className="tit">
             
                <h1 className="title">Get Started !!</h1>
                </div>
                 
                <div className="cards">

                     <div className="card1">
                     <img src={cp} alt='create_post' id="cp" />
                     <p>
                                    Post your important advertise, message, offers, etc on your 
                                    social accounts in one click.
                                    </p>
                     </div>

                     <div className="card1">
                     <img src={sp} alt='create_post' id="sp" />
                     <p>
                                   Schedule your post prior by adding date and time to your message so that
                                   no any post is missed out.
                                    </p>
                     </div>

                     <div className="card1">
                     <img src={pp} alt='create_post' id="pp" />
                     <p>
                                   See all your messages posted within 12 days.
                                    </p>
                     </div>

                </div>

            </div>
        )
    }
}
export default Dashboardinfo;