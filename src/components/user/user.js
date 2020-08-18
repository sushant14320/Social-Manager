import React,{Component} from 'react'
import Axios from 'axios'
import './user.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'


class User extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            url:''
         }
    }

        componentDidMount (){
            Axios.get('https://graph.facebook.com/v7.0/622192698426061?fields=picture,name,about&access_token=EAAI5mxwgW1MBABr1qsgLy8JAO794yttt3nXimg4ZCke3BZBZBQAgoHzbFzQx11UJ83nI8dACkhXMWy6iiTGlWBEX5ZBhYRH87PCsFRJa7ZApLZANZB1BHLqTbqRHD71vvNb08l8XgEmVUZBvDk6LxNbI5NAKlon3JKRjkoMhbnT2PCMMR9xDfJIvgZBkxv3eArJ4ZD')
            .then(userinfo =>{
                console.log("user:" + userinfo.data.picture.data.height)
                this.setState({
                    name:userinfo.data.name,
                    url:userinfo.data.picture.data.url
                })
            })
        }



    render() { 
        return ( 
            <div className="main">
            <div className="userinfo">
                User Information:
                <FontAwesomeIcon icon={faCheckCircle} color="green" className='check'/>
                <p id="name">Name : {this.state.name}</p>
                <p id="status">Status : </p>
                <p id="log">Logged-in</p>
                <img src={this.state.url} id="pro-pic" alt="Profile Pic" />

            </div>
            </div>
         );
    }
}
 
export default User;