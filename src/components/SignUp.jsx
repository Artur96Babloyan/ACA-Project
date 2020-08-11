import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Med.am
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const changeFirstname = (event) => {

    setFirstname(event.target.value)
  }
  const changeLastname = (event) => {

    setLastname(event.target.value)
  }

  const changeEmail = (event) => {

    setEmail(event.target.value)
  }

  const changePassword = (event) => {

    setPassword(event.target.value)
  }



  const signup=()=>{
    var id;
    
    fire.auth().createUserWithEmailAndPassword(email,password).then((cred)=>{
      
      
      console.log(cred) 
    console.log(cred.user)
    cred.user.updateProfile({
    displayName: firstname+' '+''+lastname
    
    })
    fire.firestore().collection('Users').doc().set({
      name:firstname,
      surname:lastname,
      id:cred.user.uid,
      email:email,
      joinedDate: new Date().toString(),
      purchases: []
    })
    })
    
    
    }  


  const { classes } = props


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
          </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={firstname}
                onChange={changeFirstname}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={lastname}
                onChange={changeLastname}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={changeEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={password}
                onChange={changePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Link to="/" style={{textDecoration:'none'}}>
            <Button href='/'
              onClick={signup}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>

          </Link>

          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/SignIn' variant="body2">
                Already have an account? Sign in
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );


}

export default withStyles(styles)(SignUp);