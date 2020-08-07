import React,{useState,useContext} from 'react';
import './Login.css';
import { Container } from '@material-ui/core';
import logo from '../SocioLogo.png';
import {AuthContext } from '../Context/Authentication';
import { withRouter, Redirect, Link} from "react-router-dom";
import Signup from '../Signup/Signup';
import firebase from 'firebase';
import land from '../images/land3.jpg'
import {firebaseApp} from '../Services/firebaseConfig';



 function Login({history}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
 
  const handleLogin=(e)=>{
    e.preventDefault();

    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        
        history.push('/dashboard');
      })
      .catch((err) => {
        alert('Something wrong with your email or Password. Try again!');
        
      });
  }
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
   
        return ( 
            <div className="login">
              {/* <div className="landimg">
                 <img src={land} alt='img' />
                 </div> */}
              
               <div className='Maincontainer'>
               <Container maxWidth='sm'>
        {/* <p>Post Anywhere Anytime...</p> */}
         <h1 className="welcome">Login Here</h1>
        
         <img src={logo} alt="logo" id='sociologo'/>
         
 
         <p className="para_login">Login to your registered account</p>
<br></br>

<form>

<section className="Field_section">
            
    <div>
        <label className="email">Email</label>
        <input
                   name="email"
                   type="text"
                   onChange={(e)=>setEmail(e.target.value)} 
                   value={email} 
                   className="form-control"
                   placeholder="mail@gmail.com"
                 />
  </div> <br/><br/>

<div>
<label className="password">Password</label>
<input
                   name="password"
                   type="password"
                   onChange={(e)=>setPassword(e.target.value)} 
                   value={password} 
                   className="form-control"
                   placeholder="**********"
                 />
  
</div><br></br>
</section>
<div onClick={handleLogin} className="buttons">
<div>
   <button id='btnLogIn'>Login</button>
</div>   
<div>
   <button id='btnCancel'>Cancel</button>
</div> 
</div>
<br></br>
 <a href={'#'} id='forgetPass'>Forget Password ?</a>
 <br></br>

<br></br><br></br>
<div className="back">
<Link id='back' to='/'>Back</Link>
</div>
 
{/* If user don't have an account */}
<p className="No_acc">Don't have an account? <a href={<Signup/>} style={{textDecoration:'none'}}>Sign Up</a></p>
<br></br><br></br>
 </form> 
   </Container>

                 </div>  
            </div>
         );
    }

 
export default withRouter(Login)