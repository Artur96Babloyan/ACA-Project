import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Checkout from './Checkout'
import fire from "../firebase";
import "firebase/auth";
import firebase from 'firebase'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[7],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.open);
  const [firstname, setFirstname] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');

  const getname = (firstname, phone, address, state) => {
    setFirstname(firstname)
    setPhone(phone)
    setAddress(address)
    setEmail(email)
  }
  const handleClose = () => {
    const user = firebase.auth().currentUser;
    let id;
    if (user) {
      fire.firestore().collection('Users').get().then(snapshot => {

        snapshot.forEach(doc => {
          if (user.uid === doc.data().id) {
            id = doc.id
            fire.firestore().runTransaction(function (transaction) {

              let sfDocRef = fire.firestore().collection("Users").doc(id)
              return transaction.get(sfDocRef).then(function (sfDoc) {

                let newArray = sfDoc.data().purchases.concat({ date: new Date().toString(), price: props.value.price, name: props.value.name })
                console.log(newArray)
                transaction.update(sfDocRef, { purchases: newArray });


              });
            })

          }
        }

        )
      })
      fire.firestore().collection('Users1').add({
        buyername: firstname,
        phoneNumber: phone,
        addressName: address,
        EmailName: email,
        date: new Date().toString(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        price: props.value.price,
        name: props.value.name
      })

      setOpen(false);
    } else {
      fire.firestore().collection('Users1').add({
        buyername: firstname,
        phoneNumber: phone,
        addressName: address,
        EmailName: email,
        date: new Date().toString(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        price: props.value.price,
        name: props.value.name
      })
      setOpen(false);
    }

  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Checkout className={classes.paper} onGetname={getname} dataid={props.dataId} value={props.value} onClose={handleClose} />
        </Fade>
      </Modal>
    </div>
  );
}