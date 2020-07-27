import React from 'react';
import './App.css';
import fire from "./firebase";
import   "firebase/auth";
import { useState, useEffect } from 'react';
import firebase from'firebase'
import Login from'./Signin'
import Signup from'./SignUp'
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
function Logoutstate (props) {
  
   const [showlogin,setShowlogin]=useState(false)
   const [showsignup,setSignup]=useState(false)
    
    
     
    const login=()=>{
         
      setShowlogin(!showlogin)
    }
    const signup=()=>{
       
      setSignup(!showsignup)
    }
  
    
      
     return (
          <>
{/*          
       <Link to="/SignUp" style={{ color: 'white', textDecoration: 'none', }} >
       <Button color="inherit" >Sign up</Button>
              </Link> */}
              <Link to="/SignIn" style={{ color: 'white', textDecoration: 'none', }}>
              <Button color="inherit">Sign in</Button>
              </Link>
          
            
          </>
     );
   
 }
export default Logoutstate;