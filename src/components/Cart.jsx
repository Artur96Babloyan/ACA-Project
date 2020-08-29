import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fire from "./firebase";
import "firebase/auth";
import "firebase/firestore";
import './App.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,

  },
});
export default function DenseTable() {
  const [rows, setRows] = useState([])
  const [count, setCount] = useState('')
  const classes = useStyles();
  const getInitialCount = () => {
    let docRef = fire.firestore().collection("CountValue").doc('FU8bp8RpRstDLRVFo1Gh');

    docRef.get().then(function (doc) {
      setCount(doc.data().count)
    })
  }
  useEffect(() => {
    getInitialCount()
  },
  )
  const initialRow = () => {
    fire.firestore().collection('Basket').get().then(snapshot => {
      let data = []
      snapshot.forEach(doc => {
        data.push(doc.data())
      })
      setRows(data)
    }).catch(error => console.log(error))
  }
  useEffect(() => {
    initialRow()
  })
  const handleDelete = (e, name) => {
    fire.firestore().collection('Basket').get().then(snapshot => {

      snapshot.forEach(doc => {
        if (doc.data().name === name) {
          fire.firestore().collection('Basket').doc(name).delete()
          fire.firestore().collection("CountValue").doc('FU8bp8RpRstDLRVFo1Gh').set({ count: count - 1 })
        }
      })

    }).catch(error => console.log(error))
  }
  return (
    <TableContainer component={Paper} id='Cart'>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>payment history</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img src={row.img} style={{ width: '5vw', height: '5vh' }} alt='Nkar' />
                <h3 style={{ display: 'inline' }}>{row.name}</h3>

              </TableCell>
              <TableCell align="right">{row.price}</TableCell>

              <TableCell align="right" onClick={(e) => handleDelete(e, row.name)}>DELETE</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
