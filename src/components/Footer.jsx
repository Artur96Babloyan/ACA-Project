import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'none', color: 'white' }}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Med.am
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({

  main: {
    display: 'inline-block',
    display: 'flex',
    float: 'right',
    
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor:'#195473',    
    textAlign: 'center',   
    // marginTop :'auto'
    
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div >
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" style={{ textDecoration: 'none', color: 'white' }}>We will take care of your health  address Avan Acharyan 20/1 Med.am.</Typography>
          <div className={classes.main}>
            <a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'white' }}><img style={{ width: '20px', height: '20px', margin: 3 }} src='https://d3frsattnbx5l6.cloudfront.net/1532688803714-instagram-94fd767f257b.png' /></a>
            <a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'white' }}> <ListItemText primary="Instagram" /></a>
            <a href='https://www.facebook.com/' style={{ textDecoration: 'none', color: 'white' }}><FacebookIcon /></a>
            <a href='https://www.facebook.com/' style={{ textDecoration: 'none', color: 'white' }}> <ListItemText primary="Facebook" /></a>
            <a href='https://twitter.com/explore' style={{ textDecoration: 'none', color: 'white' }}><TwitterIcon /></a>
            <a href='https://twitter.com/explore' style={{ textDecoration: 'none', color: 'white' }}> <ListItemText primary="Twitter" /></a>
          </div>
          <Copyright  />
        </Container>
      </footer>
    </div>
  );
}