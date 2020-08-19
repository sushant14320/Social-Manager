import React ,{Component} from 'react';
import Axios from 'axios';
import './Schedule.css';
import moment from 'moment';
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'


class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userID:'',
            access_To:'',
            message:'',
            Schedule_post:[],
            isempty :false,
            pid:[],
            Id :[],
            visible : false
            
         }
        
    }

  componentDidMount(){
 Axios.get(`https://graph.facebook.com/v7.0/me/accounts?access_token=EAAI5mxwgW1MBAKpW43RZCrnKcLdmZBpbYSzeLSY7Y4e1YplhUAXjta94rDTlvLMkG492pa6055NeQ6QPjuMeOKVX8AZADSOsKJcQeRtJ5ZBAsXtZAc6ZAFdVFpI485kOsN2rz1jZCVAR8fZAX77Sb5Jc8LPpo7nj2ZBnx9bIkKp2TZA7hcsbOTG3ZB1`)
        .then( callback2 =>{
          const rrr =  callback2.data.data;            
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

      Axios.get(`https://graph.facebook.com/v7.0/622192698426061?fields=scheduled_posts&access_token=EAAI5mxwgW1MBABr1qsgLy8JAO794yttt3nXimg4ZCke3BZBZBQAgoHzbFzQx11UJ83nI8dACkhXMWy6iiTGlWBEX5ZBhYRH87PCsFRJa7ZApLZANZB1BHLqTbqRHD71vvNb08l8XgEmVUZBvDk6LxNbI5NAKlon3JKRjkoMhbnT2PCMMR9xDfJIvgZBkxv3eArJ4ZD`)
       .then(sPost => {
        if(sPost.data.scheduled_posts === undefined){
          this.setState({
            isempty:true
          })
        }
        else
        {

         let NewSPost = sPost.data.scheduled_posts.data;
         console.log("s post " + sPost.data.length);
         this.setState({
           Schedule_post:NewSPost
         })

        }
       })
       
    
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


    getTime = () =>{
    //  const currentDate =  moment().form.unat('YYYY-MM-DDThh:mm:ss');
     
      const currentDate =  moment('2020-08-10T10:10:00').unix()

     // var ts = Math.round((new Date("2020-08-10 16:20:10").getTime()/1000-new Date().getTime()/1000 ));
      var ts = Math.round((new Date("2020-08-11 10:00:00 a")/1000));
      
    
      console.log(currentDate);
      //console.log(day);
   

    }

    schedule = () =>{

      var x = document.getElementById("datetime").value;

                  Axios.post(`https://graph.facebook.com/622192698426061/feed?published=false&message=${this.state.message}&scheduled_publish_time=2020-08-18T11:40:00&access_token=EAAI5mxwgW1MBABr1qsgLy8JAO794yttt3nXimg4ZCke3BZBZBQAgoHzbFzQx11UJ83nI8dACkhXMWy6iiTGlWBEX5ZBhYRH87PCsFRJa7ZApLZANZB1BHLqTbqRHD71vvNb08l8XgEmVUZBvDk6LxNbI5NAKlon3JKRjkoMhbnT2PCMMR9xDfJIvgZBkxv3eArJ4ZD`)
                      .then(res =>{
                        let result  =  res.data
                        console.log("success" + result.id);

                         var p_id = [];
                        this.p_id = result.id
                       this.setState({
                         Id : this.p_id
                       })
                        
                        
                        
                        console.log("keys::" +  this.state.pid)
                        
                      })
                      .catch(err =>{
                        console.log("err::" + err)
                      })
}

      handleChange = (e) =>{
                
                  e.preventDefault();
                      this.setState({
                            message:e.target.value
                })
      }
deletePost = (key) =>{
  console.log("the:" + this.state.Id)
  Axios.delete(`https://graph.facebook.com/${key}?access_token=EAAI5mxwgW1MBABr1qsgLy8JAO794yttt3nXimg4ZCke3BZBZBQAgoHzbFzQx11UJ83nI8dACkhXMWy6iiTGlWBEX5ZBhYRH87PCsFRJa7ZApLZANZB1BHLqTbqRHD71vvNb08l8XgEmVUZBvDk6LxNbI5NAKlon3JKRjkoMhbnT2PCMMR9xDfJIvgZBkxv3eArJ4ZD`)
.then(dele=>{
  console.log(dele);
  //console.log("id::" +e.target.key);
})
.catch(errr =>{
  console.log("error is:" + errr)
})
}

    render() { 

      let sarray = []
     
      sarray = this.state.Schedule_post.map((spdata,index) => {
        let Time = spdata.created_time;
        let msg_s = spdata.message;
        //index = []
      

       
        return(

          <div className = "boxPastPost">
               
        <span id="spanFlex">
               <p>Posted On :</p>
               <p>{Time}</p>
        {/* <h1>index:{index}</h1> */}
              

         </span> 
              <p >{msg_s}</p> <br></br>
           {/* <button key={this.state.pid} onClick={(e) =>this.deletePost(e.target.key)}>delete</button> */}
          </div>
        )
      })

    

        return ( 
            <div>

<Modal visible={this.state.visible} width="500" height="250" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    
                <div>
                    <FontAwesomeIcon icon={faCheckCircle} color="green" style={{position:'relative',top:'40px',left:'220px'}} size='3x' className='check'/>
                      <center>
                     
                        <h1 style={{marginTop:'65px'}}>Post Scheduled</h1>
                        </center>
                         <center>
                         <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </center>
                </div>
</Modal>



<br></br><br></br>
<section id="FlexDiv">           
                  
<div className="datetimeContainer"> 
              <label id="lblDateTime">Select date and time for scheduling</label><br></br><br></br>
                      
              <input type="datetime-local" id="datetime" style={{color:'black'}}/>

              
</div>

                  <textarea type="textarea" id="txtAreaSc" value={this.state.message} onChange={e =>this.handleChange(e)} />
                                    
                   <button  className="Sch" onClick={ () => { this.schedule(); this.openModal();}}>Schedule</button>

                 
                 <hr/>
                 <br></br>

                
</section>
<h1 id="head_s">Scheduled Posts</h1>

                {
                   (this.state.isempty)
                   ?
                   <center>
                   <h1 id="msgEmpty">No Scheduled Post</h1>
                   </center>
                   :
                          
                          <div>
                            {sarray}
                           
                          </div> 
                        
                  }

<br/><br/>
            </div>
         );
    }
}
 
export default Schedule;