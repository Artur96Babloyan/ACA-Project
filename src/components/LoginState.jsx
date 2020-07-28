import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialogitem from './Dialog'
function Loginstate(props) {
 const [dialogisopen, setDialogisopen] = useState(null)
 const changeClick = () => {

  setDialogisopen(!dialogisopen)
 }
 const logout = () => {

  fire.auth().signOut().then((cred) => {
   console.log('sign out')
  })
 }

 const profile = () => {

  const user = firebase.auth().currentUser;
  if (user) {
   alert(user.displayName + ' ' + user.email + ' ' + user.uid)

  } else {
   console.log('there is not currentUser')
  }
 }


 return (
  <>
   <div >

    <Button onClick={logout}style={{color:'white'}}>
     log out
      </Button>
    {/* <Button onClick={profile} variant="contained" color="primary">
     Details
      </Button>
    <Button onClick={changeClick} variant="contained" color="primary" >
     change password
      </Button> */}
    {dialogisopen && <Dialogitem isOpen={changeClick} />}
   </div>

  </>
 );

}
export default Loginstate;