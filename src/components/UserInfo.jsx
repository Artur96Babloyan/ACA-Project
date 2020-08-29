import React from 'react';
import './App.css';
import { useState } from 'react';
import fire from "./firebase";
import "firebase/auth";
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import Dialogitem from './Dialog'
import { BsPersonFill } from "react-icons/bs";
const styles = (() => ({

  user: {
    paddingTop: '100px'
  },
  icon: {
    marginLeft: '600px'
  }

}));
function Userinfo(props) {
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [items, setItems] = useState([])
  const [dialogisopen, setDialogisopen] = useState(null)
  const user = firebase.auth().currentUser;
  let name = user.displayName

  if (user) {
    let docRef = fire.firestore().collection('Users').doc(user.uid)
    console.log(user.uid)
    docRef.get().then((doc) => {
      setItems(doc.data().purchases)
    }).catch(err => console.log(err.message))
    console.log(items)

  }

  const changeClick = () => {
    setDialogisopen(!dialogisopen)
  }
  if (user) {
    fire.firestore().collection('Users').get().then(snapshot => {

      snapshot.forEach(doc => {

        if (user.uid === doc.data().id) {

          setEmail(doc.data().email)
          setDate(doc.data().joinedDate)


        }

      })
    })
  }
  const { classes } = props
  return (
    <>
      <div className={classes.user}>

        <BsPersonFill size='200px' color='#3F6E88' className={classes.icon} />
        <div className={classes.icon}>{name}</div>
        <div className={classes.icon}>{email}</div>
        <div className={classes.icon}>{date}</div>
        <span>gnumner</span>
        {items.map((item, index) =>
          <>

            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.date.toString()}</div>
          </>

        )}

        {dialogisopen && <Dialogitem isOpen={changeClick} />}
      </div>
    </>
  );
}
export default withStyles(styles)(Userinfo)