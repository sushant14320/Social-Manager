import React, { useState,useContext } from "react";
import './Signup.css';
import {withRouter} from 'react-router';
import { Link ,Redirect} from "react-router-dom";
import {firebaseApp} from '../Services/firebaseConfig';
import {AuthContext } from '../Context/Authentication';
import logo from '../SocioLogo.png';
import { Container } from '@material-ui/core';
import Login from '../Login/Login';

function Signup({history}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignUp=(e)=>{
      e.preventDefault();
      console.log(name,email,password);
      firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=>{
        const user = firebaseApp.auth().currentUser;
        user
          .updateProfile({ displayName: name })
          .then(() => {
            history.push('/');
          })
          .catch((err) => {
            throw Error(err);
          });
      })
      .catch((err) => {
        alert(err.message);
      });
    }
      const { currentUser } = useContext(AuthContext);
      if (currentUser) {
        return <Redirect to="/dashboard" />;
      }
  
   
        return ( 
            <div onSubmit={handleSignUp}>
               <div className='Maincontainer'>
               <Container maxWidth='sm'>
        {/* <p>Post Anywhere Anytime...</p> */}
         <h1 className="welcome">Signup Here</h1>
        
         <img src={logo} alt="logo" id='sociologo'/>
     
 
         <p className="para_login">SignUp to get registered</p>
<br></br>

<form>

<section className="Field_section">

<div>
        <label className="name">Name</label>
        <input
                   name="name"
                   type="text"
                   onChange={(e)=>setName(e.target.value)} 
                   value={name}
                   className="form-control"
                   placeholder="Jack Winston"
                 />
  </div> <br/><br/>
            
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
<div className="buttons">
<div>
   <button id='btnLogIn'>Signup</button>
</div>   
<div>
   <button id='btnCancel'>Cancel</button>
</div> 
</div>
<br></br>
 <a href={'#'} id='forgetPass'>Forget Password ?</a>
 <br></br>

<br></br><br></br>
<div className="backSignup">
<Link id='backSignup' to='/'>Back</Link>
</div>
 
{/* If user don't have an account */}
<p className="No_acc">Have an account? <a href={<Login/>} style={{textDecoration:'none'}}>Login</a></p>
<br></br><br></br>
 </form> 
   </Container>

                 </div>  
            </div>
         );
    }

 
export default withRouter(Signup)