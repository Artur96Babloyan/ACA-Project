import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';




const styles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#195473',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#195473',
    color: 'white'
  },
}));



function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const changeEmail = (event) => {
    //const {name}=this.state
    setEmail(event.target.value)
  }

  const changePassword = (event) => {

    setPassword(event.target.value)
  }

  const login = () => {


    fire.auth().signInWithEmailAndPassword(email, password).then((cred) => {
      console.log(cred.user.uid)

    }).catch(err => alert(err.message))
  }

  const { classes } = props

  return (
    <Container component="main" maxWidth="xs" id='responsiveSignIn'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
            </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button href='/'
              onClick={login}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
              </Button>

          </Link>

          <Grid container >
            <Grid item xs>
              <Link to="/forgotPassword" variant="body2">
                Forgot password?
               </Link>
            </Grid>
            <Grid item>
              <Link to="/SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );







  //   <Grid container component="main" className={classes.root}>
  //     <CssBaseline />
  //     <Grid item xs={false} sm={4} md={7} className={classes.image} />
  //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //       <div className={classes.paper}>
  //         <Avatar className={classes.avatar}>
  //           <LockOutlinedIcon />
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           LogIn
  //         </Typography>
  //         <form className={classes.form} noValidate>
  //           <TextField
  //           value={email}
  //           onChange={changeEmail}
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="email"
  //             label="Email Address"
  //             name="email"
  //             autoComplete="email"
  //             autoFocus
  //           />
  //           <TextField
  //           value={password}
  //           onChange={changePassword}
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             name="password"
  //             label="Password"
  //             type="password"
  //             id="password"
  //             autoComplete="current-password"
  //           />
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary" />}
  //             label="Remember me"
  //           />
  //            <Link to="/" style={{textDecoration:'none'}}>
  //            <Button
  //            onClick={login}
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             color="primary"
  //             className={classes.submit}
  //           >
  //             logIn
  //           </Button>
  //         </Link>

  //           <Grid container>
  //             <Grid item xs>
  //               <Link to="/forgotPassword" variant="body2">
  //                 Forgot password?
  //               </Link>
  //             </Grid>
  //             <Grid item>
  //               <Link to="/SignUp" variant="body2">
  //                 {"Don't have an account? Sign Up"}
  //               </Link>
  //             </Grid>
  //           </Grid>
  //           <Box mt={5}>
  //             <Copyright />
  //           </Box>
  //         </form>
  //       </div>
  //     </Grid>
  //   </Grid>
  // );


}

export default withStyles(styles)(Login);