import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green,blue } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from "react-router-dom";
import Menus from './share'
import fire from "./firebase";
import   "firebase/auth";
import   "firebase/firestore";
import firebase from'firebase'
import TransitionsModal from './BuyModal/Modal'
import { IconCount } from './data'
import { useContext } from 'react';
import Editcard from './EditCard'
import Deletecard from './DeleteCard'
import Addcard from './AddCard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },

  media: {
    height: 0,
    paddingTop: '56.25%',
  },

  expandOpen: {
    transform: 'rotate(160deg)',
  },
  avatar: {
    backgroundColor: '#195473',
  },
  admin:{
    paddingRight:'5px'
  }
}));


function OurCard(props) {
  const classes = useStyles();
  let [color, setColor] = useState('')
  let [id, setId] = useState(0)
  const [isEditOpen,setIseditopen]=useState(null)
  const [isDeleteOpen,setIsdeleteopen]=useState(null)
  const [isAddOpen,setIsaddopen]=useState(null)

  let [showModal, setShowModal] = useState(false)
  const [admin,setAdmin]=useState(null)
 
  const onChangeEditOpen=()=>{
    setIseditopen(!isEditOpen)
   }
   const onChangeAddOpen=()=>{
    setIsaddopen(!isAddOpen)
   }
   const onChangeDeleteOpen=()=>{
    setIsdeleteopen(!isDeleteOpen)
   }
 
  const userState=()=>{
     firebase.auth().onAuthStateChanged(user=>{
       if(user) {
           if(user.email==='admin@admin.com') {
            setAdmin(true)
            
           }
       
     }
   })
  }

  useEffect(()=>{
    userState()
   }
    )

    
  const handleExpandClick = () => {
    setShowModal(showModal = !showModal)
    setId(id = props.value.id)
    
  };
  const changeColor = () => {
    setColor(color = color === '' ? '#195473' : '')
    props.count.onChange(color, props.count)
  }
  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <a href={props.value.name} style={{ color: 'white', textDecoration: 'none' }} >
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.value.name[0]}
        
            </Avatar>
          </a>
        }

        title={props.value.name}
        subheader="September 14, 2016"
      />
      <a href={props.value.name} style={{ textDecoration: 'none' }}>
        <CardMedia
          className={classes.media}
          image={props.value.img}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.value.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {props.history.location.pathname === '/' ? <a href={props.value.name}
          style={{ textDecoration: 'none' }}>
          <IconButton onClick={handleExpandClick}  aria-label="add to favorites">
          More 
            </IconButton>
        </a> : <>
            <IconButton onClick={handleExpandClick} aria-label="add to favorites">
              Գնել
              </IconButton>
            {showModal && <div>
              <TransitionsModal  dataId={id} open={showModal} value={props.value}/>
            </div>}
            <IconButton onClick={changeColor} aria-label="add to favorites">
              <ShoppingCartIcon style={{ color,float:'right' }} />
            </IconButton>
          </>}
          
          {admin && <div className={classes.admin} onClick={onChangeEditOpen}>edit</div>}
          
          {admin && <div className={classes.admin} onClick={onChangeDeleteOpen}>delete</div>}
         
          {admin && <div className={classes.admin} onClick={onChangeAddOpen}>add</div>}
         
        {/* <Menus /> */}
      </CardActions>
      {isEditOpen && <Editcard onClose={onChangeEditOpen} productName={props.value.name} priceValue={props.value.price} sectionName={props.name}/>}
      {isDeleteOpen && <Deletecard onClose={onChangeDeleteOpen} productName={props.value.name}  sectionName={props.name}/>}
      {isAddOpen && <Addcard onClose={onChangeAddOpen}   sectionName={props.name} />}
    </Card>

  );

}
export default withRouter(OurCard)