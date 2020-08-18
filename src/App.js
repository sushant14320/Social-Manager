import React,{Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route}
  from 'react-router-dom';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home';
import Dashboard from './components/Connection/Connection';
//import Redirect from '../src/components/Redirect/Redirect';
import dashRedirect from '../src/components/Dashboard/Dashboard';
import PastPost from '../src/components/PastPost/PastPost';
import Schedule from '../src/components/Schedule/Schedule';
//import Dashboard from '../src/components/Connection/Dashboard';
//import firebase from './components/Services/firebaseConfig';
// import './App.css';

//import logo from './logo.svg';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user:{}
     }
  }
  
  render() {

  return (

  
    <Router>
        <Route path="/"  exact component={Home}/>
        <Route path="/SignUp" component={Signup}/>
        <Route path="/Login" component={Login}/>
        <Route path="/connection" component={Dashboard}/>
        <Route path="/redirect" component={dashRedirect}/>
        <Route path="/pastpost" component={PastPost}/>
        <Route path="/schedule" component={Schedule}/>
    </Router>
        
  
 
  );
}
}
export default App;
