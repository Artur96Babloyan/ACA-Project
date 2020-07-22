import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import OurCard from './components/Card'
import data from './components/data'
import { IconCount } from './components/data'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Signin'
import SignUp from './components/SignUp'
import FooterPage from './components/Footer'
import ForgotPass from './components/FrogotPassword'
import Mercedes from './components/Mercedes'

import './components/App.css'



const useStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: 100,

  },

}));

function App() {
  const classes = useStyles();
  const [count, setCount] = useState({ count: -1 })
  const onChangeCount = (initial, count) => {
    setCount({ count: !initial ? count.count - 1 : count.count + 1, onChange: onChangeCount })
  }
  useEffect(() => {
    onChangeCount(true, count)
  }, [])

  return (
    <>
      <Router>
        <Header value={count.count} />
        <Route path='/' exact >
          <Grid container justify="center" >
            {data.map((value) => (
              <Grid key={value.id} item >
                <OurCard className={classes.paper} value={value} />
              </Grid>
            ))}
          </Grid>
        </Route>
        <IconCount.Provider value={count}>
          {data.map((item) => (<Route exact path={'/' + item.name}>
            <Mercedes ndata={item.data} />
          </Route>
          ))}
        </IconCount.Provider>
        <Route path='/SignIn'>
          <Login />
        </Route>
        <Route path='/SignUp'>
          <SignUp />
        </Route>
        <Route path='/forgotPassword'>
          <ForgotPass />
        </Route>
        <FooterPage />
      </Router>
    </>
  );
}
export default App;
