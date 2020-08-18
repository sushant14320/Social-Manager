import React,{Component} from 'react'
import Dashboardinfo from '../Dashboardinfo/Dashboardinfo';
import '../Dashboardinfo/Dashboardinfo.css';

class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <Dashboardinfo/>
            </div>
         );
    }
}
 
export default Default;