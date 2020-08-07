import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
//import { useEffect, useState } from 'react'
// import { getUserInfo, getPages } from '../../../services/auth'
import Axios from 'axios';
import './Redirect.css';


class Redirect extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID:'',
            access_To:'',
            message:'',
            name:'',
            picture:'',
            email:''
         }
         console.log(this.props.email);
    }

    componentDidMount(access){



     

      Axios.get(`https://graph.facebook.com/v7.0/me/accounts?access_token=EAAI5mxwgW1MBAKpW43RZCrnKcLdmZBpbYSzeLSY7Y4e1YplhUAXjta94rDTlvLMkG492pa6055NeQ6QPjuMeOKVX8AZADSOsKJcQeRtJ5ZBAsXtZAc6ZAFdVFpI485kOsN2rz1jZCVAR8fZAX77Sb5Jc8LPpo7nj2ZBnx9bIkKp2TZA7hcsbOTG3ZB1`)
      .then( callback1 =>{
        const rrr =  callback1.data.data;
        console.log("data" + rrr);
        this.setState({
          userID:rrr[0].id,
          access_To:rrr[0].access_token,
          name:rrr[0].name,
          email:rrr[0].email
          // picture:rrr[0].picture.data.url

        })
        console.log(this.state.userID)
        console.log(this.state.access_To)
        // console.log(this.state.email)
        // console.log(this.state.picture);
        

      })
      Axios.get(`https://graph.facebook.com/v7.0/me/accounts?access_token=${this.state.access_To}`)
      .then( callbac =>{
        console.log("data" + callbac);
      })

    }


     post = () =>{

       
        Axios.post(`https://graph.facebook.com/622192698426061/feed?`,{
          message: this.state.message,
          access_token:this.state.access_To})
          .then(res =>{
            let result  =  res.data
            console.log(result);
          })
          .catch(err =>{
            console.log(err)
          })
    
       }
    
     handleChange = (e) =>{
        e.preventDefault();
        this.setState({
          message:e.target.value
        })
     }
    
    render() { 
        return (
        
        <div>


<div className="DivConatiner">
        <h1 id="WlcUser">Welcome, {this.state.name}</h1>
        <h3 id="WlcUser_2">Go ahead and POST !</h3>
</div>



<section id="FlexDiv">           
                  
<textarea style={{}} type="textarea" id="txtArea" value={this.state.message} onChange={e =>this.handleChange(e)} />
                  
 <button  className="BtnPost" onClick={this.post}>post</button>

</section>

        </div>  
        
        );
    }
}
 
export default Redirect;