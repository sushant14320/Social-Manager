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
import Dashboard from './components/Connection/Dashboard';
import Redirect from '../src/components/Redirect/Redirect';
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
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/redirect" component={Redirect}/>
    </Router>
        
  
 
  );
}
}
export default App;
