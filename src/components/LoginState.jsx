import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { BsPersonSquare } from "react-icons/bs";
import {FiUserCheck } from "react-icons/fi";
function Loginstate(props) {
 
      const [admin,setAdmin]=useState(null)
 
 
      const userState=()=>{
         firebase.auth().onAuthStateChanged(user=>{
           if(user) {
               if(user.email==='admin@admin.com') {
                setAdmin(true)
               
               } 
           } 
         })
       }
    
       useEffect(()=>{
        userState()
       }
        )
 return (
  <>
   <div >
   {!admin && <Link to="/UserInfo"><BsPersonSquare   style={{ color: 'white', textDecoration: 'none',cursor:'pointer' }}/></Link> }
   {admin && <Link to="/admin"><FiUserCheck   size='30px' style={{ color: 'white', textDecoration: 'none',cursor:'pointer' }}/></Link>}
   
   </div>
  </>
 );
}
export default Loginstate;