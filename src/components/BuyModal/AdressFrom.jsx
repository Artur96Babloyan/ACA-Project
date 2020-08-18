import React from 'react';
import { useState, useEffect } from 'react';
import fire from "../firebase";
import "firebase/auth";
import firebase from 'firebase'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1.5),
    minWidth: 264,
  },
 
}));
export default function AddressForm(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const user=firebase.auth().currentUser;
  const [firstname,setFirstname]=useState(user?user.displayName:'')

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const changeFirstname=(e)=>{
  
   setFirstname(e.target.value)
 
  }
useEffect(()=>{
  const {getname}=props
  getname(firstname)
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
            id="firstName LastName"
            name="firstName LastName"
            label="FullName"
            fullWidth
            autoComplete="given-firstName LastNamename"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Phone Number"
            name="Phone Number"
            label='Phone Number'
            placeholder="+374 xx xxxxxx"
            fullWidth
            autoComplete="Phone Number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line"
          />
        </Grid>
        <FormControl className={classes.formControl} item xs={12} sm={6}>
        <InputLabel id="demo-simple-select-helper-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      
      
        <Grid>
         
        </Grid>
      </Grid>
    </React.Fragment>
  );
}