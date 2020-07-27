import React from 'react';
import './App.css';
import fire from "./firebase";
import   "firebase/auth";
import { useState, useEffect } from 'react';
import firebase from'firebase'
import Loginstate from "./LoginState";
import Logoutstate from "./LogoutState";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
function Dialogitem  (props) {
   
      const [inputvalue, setInputvalue]=useState('')
       const inputchange=(e)=>{
            
        setInputvalue(e.target.value)
       }
      
   const handleSave=()=>{
      const {isOpen}=props
          
         const user = firebase.auth().currentUser;
        
     user.updatePassword(inputvalue).then(function() {
      alert('your password updated successfully')
     
      isOpen()
     }).catch(function(error) {
               alert(error.message)
    });
         
   }
   const handleClose=()=>{
    const {isOpen}=props
    isOpen(null)
   }
   
    
        
     return (
          <>
      
    
      <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">change password</DialogTitle>
       
        <DialogContent>
         
          <TextField
          value={inputvalue}
          onChange={inputchange}
            autoFocus
            margin="dense"
            id="name"
            label="new password"
            type="email"
            fullWidth
          />
        </DialogContent>
       
        <DialogActions>
         
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
          </>
     );
   
 }
export default Dialogitem;