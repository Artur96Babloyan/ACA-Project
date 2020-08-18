import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
  return (

    <Typography variant="body2" color="textSecondary" align="center">
      <Typography variant="body1" style={{ textDecoration: 'none' }}>
        We will take care of your health  address Avan Acharyan 20/1
      </Typography>
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

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',

    },
  },

  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

}));


const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Share',
    description: [<a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'white' }}><img style={{ width: '20px', height: '20px', margin: 3 }} src='https://d3frsattnbx5l6.cloudfront.net/1532688803714-instagram-94fd767f257b.png' /></a>,
    <a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'white' }}> </a>,
    <a href='https://www.facebook.com/' style={{ textDecoration: 'none' }}><FacebookIcon /></a>,
    <a href='https://www.facebook.com/' style={{ textDecoration: 'none' }}> </a>,
    <a href='https://twitter.com/explore' style={{ textDecoration: 'none' }}><TwitterIcon /></a>,
    <a href='https://twitter.com/explore' style={{ textDecoration: 'none' }}> </a>],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/*start  Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
