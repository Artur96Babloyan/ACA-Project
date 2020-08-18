import React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'


const styles = ((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20vh'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#195473'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#195473',
    color: 'white'
  },
}));

function ForgotPass(props) {
  const [email, setEmail] = useState('')

  const emailChange = (event) => {

    setEmail(event.target.value)
  }
  const changePassword = () => {

    if (email) {
      firebase.auth().sendPasswordResetEmail(email).then(() => alert('email has been sent to your email, please check and verify')).
        catch((error) => alert(error.message))
    } else {
      alert('enter your email')
    }
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
          Change Password
                </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={email}
                onChange={emailChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address or Phone Number"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </Grid>
          </Grid>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button
              onClick={changePassword}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Change Password
                   </Button>
          </Link>

          <Grid container >
            <Grid item>
              <Link to="/SignUp" variant="body2" style={{ marginBottom: '50vh' }}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>









    //     <Grid container component="main" className={classes.root}>
    //     <CssBaseline />
    //     <Grid item xs={false} sm={4} md={7} className={classes.image} />
    //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //         <div className={classes.paper}>
    //             <Avatar className={classes.avatar}>
    //                 <LockOutlinedIcon />
    //             </Avatar>
    //             <Typography component="h1" variant="h5">
    //                 Restore Password
    //           </Typography>
    //             <form className={classes.form} noValidate>
    //                 <TextField
    //                     value={email}
    //                     onChange={emailChange}
    //                     variant="outlined"
    //                     margin="normal"
    //                     required
    //                     fullWidth
    //                     id="email"
    //                     label="Email Address or Phone Number"
    //                     name="email"
    //                     autoComplete="email"
    //                     autoFocus
    //                 />
    //                 <Link to="/" style={{textDecoration:'none'}}>
    //                 <Button
    //                     onClick={changePassword}
    //                     type="submit"
    //                     fullWidth
    //                     variant="contained"
    //                     color="primary"
    //                     className={classes.submit}
    //                 >
    //                     Reset Password
    //                </Button>
    //                </Link>
    //                 <Grid container>
    //                     <Grid item>
    //                         <Link href="/SignUp" variant="body2">
    //                             {"Don't have an account? Sign Up"}
    //                         </Link>
    //                     </Grid>
    //                 </Grid>
    //                 <Box mt={5}>
    //                     <Copyright />
    //                 </Box>
    //             </form>
    //         </div>
    //     </Grid>
    // </Grid>
  );



}
export default withStyles(styles)(ForgotPass);














