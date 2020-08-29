import React from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import fire from "./firebase";
import "firebase/auth";
import "firebase/firestore";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (() => ({

  admin: {
    paddingTop: '10vw',
    textAlign: 'center'
  },

}));
function Admin(props) {
  const [year, setYear] = useState('')
  const [monthNumber, setMonthnumber] = useState('')
  const [monthString, setMonthstring] = useState('')
  const [day, setDay] = useState('')
  const [orderList, setOrderlist] = useState(null)



  const handleYear = (e) => {
    setYear(e.target.value)
  }

  const handleMonth = (e) => {
    if (e.target.value === "August") {
      setMonthstring(e.target.value)
      setMonthnumber(7)

    } else if (e.target.value === "January") {
      setMonthstring(e.target.value)
      setMonthnumber(0)
    } else if (e.target.value === "February") {
      setMonthstring(e.target.value)
      setMonthnumber(1)
    } else if (e.target.value === "March") {
      setMonthstring(e.target.value)
      setMonthnumber(2)
    } else if (e.target.value === "April") {
      setMonthstring(e.target.value)
      setMonthnumber(3)
    } else if (e.target.value === "May") {
      setMonthstring(e.target.value)
      setMonthnumber(4)
    } else if (e.target.value === "June") {
      setMonthstring(e.target.value)
      setMonthnumber(5)
    } else if (e.target.value === "July") {
      setMonthstring(e.target.value)
      setMonthnumber(6)
    } else if (e.target.value === "September") {
      setMonthstring(e.target.value)
      setMonthnumber(8)
    } else if (e.target.value === "October") {
      setMonthstring(e.target.value)
      setMonthnumber(9)
    } else if (e.target.value === "November") {
      setMonthstring(e.target.value)
      setMonthnumber(10)
    } else if (e.target.value === "December") {
      setMonthstring(e.target.value)
      setMonthnumber(11)
    }



  }

  const handleDay = (e) => {
    setDay(e.target.value)
  }

  const handleOrders = (e) => {

    console.log(year)
    console.log(monthNumber)
    console.log(day)
    fire.firestore().collection('Users1').get().then(snapshot => {
      const datas = []
      snapshot.forEach(doc => {
        console.log(doc.data().year)
        console.log(doc.data().month)
        console.log(doc.data().day)
        if (doc.data().year === year && doc.data().month === monthNumber && doc.data().day === day) {
          datas.push(doc.data())
        }

      })
      setOrderlist(datas)
    })

      .catch(error => console.log(error))

  }

  const logout = () => {

    fire.auth().signOut().then((cred) => {
      console.log('sign out')
    })
  }
  const { classes } = props



  return (
    <div className={classes.admin}>

      <Link to="/"> <Button onClick={logout} variant="contained" color="primary" style={{ textDecoration: 'none' }}>
        log out
         </Button>
      </Link>
      <div>
        <span>year</span>
        <input value={year} onChange={handleYear} />
      </div>
      <div>
        <span>month</span>
        <div>
          <select value={monthString} onChange={handleMonth}>
            <option >January</option>
            <option  >February</option>
            <option  >March</option>
            <option  >April</option>
            <option  >May</option>
            <option  >June</option>
            <option  >July</option>
            <option  >August</option>
            <option  >September</option>
            <option  >October</option>
            <option  >November</option>
            <option  >December</option>
          </select>
        </div>

        <span >date</span>
        <input value={day} onChange={handleDay} />
      </div>
      <button onClick={handleOrders}>search</button>

      {orderList && orderList.map((item, index) =>
        <>

          <div>{item.name}</div>
          <div>{item.price}</div>
          <div>{item.date.toString()}</div>
          <div>{item.buyername}</div>
          <div>{item.phoneNumber}</div>
          <div>{item.addressName}</div>
          <div>{item.stateName}</div>
        </>

      )}
    </div>

  );

}

export default withStyles(styles)(Admin);