import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import OurCard from './components/Card'
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
import FeaturedPost from "./components/Post";
import Divider from '@material-ui/core/Divider';
import ReactPlayer from "react-player";
import data from './components/data'
import uuid from 'react-uuid'

const useStyles = makeStyles(() => ({
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

  const featuredPosts = [
    {
      title: 'Դեղատան աշխատակիցների նշանակումները ',
      date: '2 Օգոստոս 2020',
      description:
        'Դեղատներում շատ հաճախ դեղատան աշխատակիցները պացիենտներին խորհուրդներ են տալիս դեղերի ընտրության հարցում և երբեմն բուժում նշանակում։\n' +
        '\n',
      image: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=5251&q=80',
      imageText: 'Image Text',
    },
    {
      title: 'Դեղագետը միայն դեղատնային աշխատանքը չէ',
      date: '7 Հուլիս 2020',
      description:
        'Ներկայումս դեղագործական արդյունաբերությունը հանդիսանում է համաշխարհային տնտեսության կարևոր ճյուղերից մեկը, որը լրջորեն ազդում է հարակից ոլորտներում տիրող իրավիճակի վրա',
      image: 'https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      imageText: 'Image Text',
    },
  ];


  return (
    <>
      <Router>
        <Header />
        <Route path='/' exact >
          <SimpleSlider />
          <Grid container justify="center">
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Divider className={classes.divide} variant="middle" />

          <Grid container justify="center" style={{ paddingTop: '30px' }}>
            <ReactPlayer url='https://www.youtube.com/watch?time_continue=2&v=XXhLQXWytCY&feature=emb_logo' />
          </Grid>
          <Grid container justify="center" >
            {data.map((value) => (
              <Grid key={value.id} item >
                <OurCard className={classes.paper} value={value} />
              </Grid>
            ))}
          </Grid>
        </Route>
        <IconCount.Provider value={count}>
          {data.map((item) => (<Route exact path={'/' + item.name} key={uuid()} >
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
      </Router>
      <FooterPage />
    </>
  );
}
export default App;
