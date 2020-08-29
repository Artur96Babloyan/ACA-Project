import React from 'react';
import { useState, useEffect } from 'react';
import "firebase/auth";
import firebase from 'firebase'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm(props) {
  const user=firebase.auth().currentUser;
  const [firstname,setFirstname]=useState(user?user.displayName:'')
  const [phone,setPhone]=useState('')
  const [isChecked,setIschecked]=useState(false)
  const [address,setAddress]=useState('')
  const [email,setEmail]=useState('')
  
const handlecheckchange=()=>{
  setIschecked(!isChecked)
  
  const {getCheck}=props
  getCheck(isChecked)
}
 
  const changeFirstname=(e)=>{
  
   setFirstname(e.target.value)
 
  }
  const changePhone=(e)=>{
  
    setPhone(e.target.value)
  
   }
   const changeAddress=(e)=>{
  
    setAddress(e.target.value)
  
   }
   const changeEmail=(e)=>{
  
    setEmail(e.target.value)
  
   }
useEffect(()=>{
  const {getname}=props
  getname(firstname,phone,address,email)
})
 
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          value={firstname}
          onChange={changeFirstname}
            required
            id="firstName"
            name="firstName"
            label="FullName"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={phone}
            onChange={changePhone}
            required
            placeholder="+374 xx xxxxxx"
            id="lastName"
            name="lastName"
            label="Phone number"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
          value={address}
          onChange={changeAddress}
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={email}
            onChange={changeEmail}
           id="state" name="email" label="Email Address" fullWidth />
        </Grid>
      
        <Grid item xs={12}>
          <span> kanxik</span>
         <input type='checkbox'  checked={isChecked} onChange={handlecheckchange}/>
         
        </Grid>
        <Grid>
         
        </Grid>
      </Grid>
    </React.Fragment>
  );
}