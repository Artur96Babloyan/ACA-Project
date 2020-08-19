import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import OurCard from './components/Card'
import data from './components/data'
import "firebase/app";
import fire from "./components/firebase";
import "firebase/auth";
import "firebase/firestore";
import { IconCount } from './components/data'
import { makeStyles } from '@material-ui/core/styles';
import Admin from './components/Admin'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Signin'
import SignUp from './components/SignUp'
import FooterPage from './components/Footer'
import ForgotPass from './components/ForgotPassword'
import Drags from './components/Drags'
import './components/App.css'
import SimpleSlider from './components/Slider/Slider'
import UserInfo from './components/UserInfo'
import EnhancedTable from './components/Cart'

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: 100,
  },
}));
function App() {
  const classes = useStyles();
  const [count, setCount] = useState({ count: -1 })
  // const [data, setData] = useState(null)
  const onChangeCount = (initial, count) => {
    setCount({ count: !initial ? count.count - 1 : count.count + 1, onChange: onChangeCount })
  }
  useEffect(() => {
    onChangeCount(true, count)
  }, [])
  // const changaData = () => {
  //   fire.firestore().collection('data').get().then(snapshot => {
  //     const datas = []
  //     snapshot.forEach(doc => {
  //       datas.push(doc.data())
  //     })
  //     setData(datas)
  //   }).catch(error => console.log(error))
  // }
  // useEffect(() => {
  //   changaData()
  // })
  return (
    <>
      <Router>
        <Header value={count.count} />
        <Route path='/' exact >
          <SimpleSlider/>
          <Grid container justify="center" >
            { data.map((value) => (
              <Grid key={value.id} item >
                <OurCard className={classes.paper} value={value} />
              </Grid>
            ))}
          </Grid>
        </Route>
        <IconCount.Provider value={count}>
          {data.map((item) => (<Route exact path={'/' + item.name}>
            <Drags name={item.name} ndata={item.data} />
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
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/UserInfo'>
          <UserInfo />
        </Route>
        <Route path='/Order'>
          <EnhancedTable />
        </Route>
        <FooterPage />
      </Router>
    </>
  );
}
export default App;
