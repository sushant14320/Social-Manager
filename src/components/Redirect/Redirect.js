import React ,{Component} from 'react';
import {NavLink} from 'react-router-dom';
//import { useEffect, useState } from 'react'
// import { getUserInfo, getPages } from '../../../services/auth'
import Axios from 'axios';
import './Redirect.css';
//import firebaseApp from '../Services/firebaseConfig';
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'



class Redirect extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID:'',
            access_To:'',
            message:'',
            name:'',
            picture:'',
            email:'',
            visible : false
         }
         console.log(this.props.email);
    }

    openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
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
          

        })
        console.log(this.state.userID)
        console.log(this.state.access_To)
       
        

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
        
        <div className="maincontent">

            
                <Modal visible={this.state.visible} width="500" height="250" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                    <FontAwesomeIcon icon={faCheckCircle} color="green" style={{position:'relative',top:'40px',left:'220px'}} size='3x' className='check'/>
                      <center>
                     
                        <h1 style={{marginTop:'65px'}}>Posted</h1>
                        </center>
                       <center>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </center>
                    </div>
               </Modal>


<div className="DivConatiner">
        
      
        <h2 id="WlcUser_2">Go ahead and POST !</h2>

</div>



  <section id="FlexDiv_createP">           
                  
                  <textarea type="textarea" id="txtArea" placeholder="Type your message here" value={this.state.message} onChange={e =>this.handleChange(e)} />
                                    
                  <button  className="BtnPost" onClick={this.post}>Post</button>

  </section>

        </div>  
        
        );
    }
}
// page access:EAAI5mxwgW1MBAG1OaueKWTxZCE2j6wZCr21sVkK9InLsOtudN7xgeikuaqzLeIZBwg9RSnvrGDZAj9wPOQCFhi0gUjuaWdOyBdic8soq2iMImkjUfy7lrH7jrBEYeS5TCriPsXDbIu9eThbGBjBFD99jvPWZBVYGkUQrW1k1wvfoOBmWTimqsSw9pNbsQuMV3dduGlrZCXzc8FW1g1AqI1ymTCRY3E1Q0ZD
export default Redirect;