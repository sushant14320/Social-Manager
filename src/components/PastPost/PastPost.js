import React,{Component} from 'react'
import Axios from 'axios';
import './PastPost.css';


class PastPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts:[],
            emptyFeed:false,
            PastDataPost:[],
            limitPost:[],
            
          }
    }

    componentDidMount(){
        Axios.get('https://socio-3ac19.firebaseio.com/posts.json')
        .then(post =>{
            if(post.data === null){
                this.setState({
                    emptyFeed:true
                })
            }
            else
            {            

            const data = post.data;
            const newData = Object.values(data);
            console.log("post" + newData[0].post);
            this.setState({
                Posts:newData
                        })

                    }

                    })
                
                    Axios.get('https://graph.facebook.com/v7.0/622192698426061/feed?limit=12&access_token=EAAI5mxwgW1MBABr1qsgLy8JAO794yttt3nXimg4ZCke3BZBZBQAgoHzbFzQx11UJ83nI8dACkhXMWy6iiTGlWBEX5ZBhYRH87PCsFRJa7ZApLZANZB1BHLqTbqRHD71vvNb08l8XgEmVUZBvDk6LxNbI5NAKlon3JKRjkoMhbnT2PCMMR9xDfJIvgZBkxv3eArJ4ZD',{
                        params : {
                            _limit:12
                        }
                    })
                    .then(pastdata =>{
                      
                       
                        let count  = 0;
                       while( count < 12) {
                        let pastD = pastdata.data.data
                       
                        const newPastdata =  Object.values(pastD);
                        count++
                        console.log("pastpost"+ pastD.length)
                        this.setState({
                            PastDataPost:pastD
                            
                        })
    
                       }
                       
                    })
        
    
    }
    render() { 
    

        let PostArray = [];
        for(let i = 0 ; i < 12 ;i++){
           
        PostArray = this.state.PastDataPost.map((dataof,index) => {
            let createTime = dataof.created_time;
            let msg = dataof.message;
            return (
            <div className = "boxPastPost">
                <span id="spanFlex">
                 
                 <p>Posted On :</p>
                 <p>{createTime}</p>
                </span>
                 
                 <p>Post : {msg}</p><br></br>
                 
            </div>
            )
        })
            
        }


        return ( 
<div className="pastpost">
    {/* <h1 id="historyPost">History</h1> */}
    <hr
    style={{width:'50%'}}
    />

    {/* <p id="recentPost">Your recent feed...</p> */}
        <div>
                
                {PostArray}
            
        </div>
        <br/><br/>
 
 
 </div>
         );
    }
}
 
export default PastPost;