import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";
import Loginlogout from './LoginLogout';
import fire from "./firebase";
import "firebase/auth";
import './App.css'
import PersistentDrawerLeft from './BurgerMenu/Burger-menu'



const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },

  butons: {
    '& > *': {
      margin: '1vw',
      color: 'white',
      fontSize: '1.3vw'
    },
    flexGrow: 1,
  },
  body: {
    backgroundColor: '#195473',
  },
  search: {
    padding: '0.5vw 1vw',
    display: 'flex',
    alignItems: 'center',
    width: '10vw',

  },
  iconButton: {
    padding: '0.5vw',
    color: 'white'
  },
  input: {
    marginLeft: '1vw',
    flex: 1,
  },
  menuButton: {
    marginRight: '2vw'
  },
  title: {
    fontSize: '2vw',
    flexGrow: 1,
  },
}));
function Header(props) {
  let [value, setValue] = useState()
  const [openSearch, setOpenSearch] = useState(false)
  const [backValue, setBackvalue] = useState('')
  const onchange = (event) => {
    setValue(value = event ? event.target.value : '')

  }

  const getInitialValue = () => {
    let docRef = fire.firestore().collection("CountValue").doc('FU8bp8RpRstDLRVFo1Gh');
    docRef.get().then(function (doc) {
      setBackvalue(doc.data().count)
    })
  }
  useEffect(() => {
    getInitialValue()
  },
  )

  const keyPress = (e) => {
    if (e.keyCode === 13 && value !== '') {
      props.history.push(value)
      setValue(value = '')

    }
  }
  const SearchIconClick = () => {
    setOpenSearch(!openSearch)
    props.history.push(value)
    setValue(value = '')
  }

  const classes = useStyles();
  return (

    <div className={classes.root} id="header">
      <AppBar position="static" className={classes.body}>
        <Toolbar>
          <PersistentDrawerLeft />
          <Typography variant="h6" className={classes.title} id="logoMedia">
            <a href='/' style={{ color: "white", textDecoration: 'none' }} >MED.AM</a>
          </Typography>
          <div className={classes.butons} id='button'>
            <Button href='/'>ԳԼԽԱՎՈՐ</Button>
            <Button href="#text-buttons" >ՏԵՍԱԿԱՆԻ</Button>
            <Button href="#text-buttons" >ՄԵՐ ՄԱՍԻՆ</Button>
            <Button href="#text-buttons" >ԱՌՑԱՆՑ ԲԺԻՇԿ</Button>
            <Button href="#text-buttons" >ԿԱՊ</Button>
          </div>
          <IconButton onClick={SearchIconClick} type="submit" className={classes.iconButton} aria-label="search" id="mobileVersion">
            <SearchIcon />
          </IconButton>
          {openSearch &&
            <Paper className={classes.search}>
              <InputBase id="standard-basic"
                label="Search"
                onChange={onchange}
                value={value}
                onKeyDown={keyPress}
                placeholder='Search'
              />
            </Paper>
          }
          <Button color="inherit" href='/Order'>
            <StyledBadge badgeContent={backValue} color="secondary">
              <AddShoppingCartIcon />
            </StyledBadge></Button>
          <Loginlogout />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header)

