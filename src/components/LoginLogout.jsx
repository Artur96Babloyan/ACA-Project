import React from 'react';
import './App.css';
import fire from "./firebase";
import { useState, useEffect } from 'react';
import   "firebase/auth";
import firebase from'firebase'
import Loginstate from "./LoginState";
import Logoutstate from "./LogoutState";

function  Loginlogout (props) {
  const [user,setUser]=useState(null)
 
 
  const userState=()=>{
     firebase.auth().onAuthStateChanged(user=>{
       if(user) {
         console.log(user.email)
         setUser(user)
       } else {
        setUser(null)
       }
     })
   }
   useEffect(()=>{
    userState()
   }
    )
    
       
     return (
          <>
           {user && <Loginstate />}
           {!user && <Logoutstate /> }
          </>
     );
   
 }
export default Loginlogout;