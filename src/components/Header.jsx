import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import LongMenu from './Menu'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from "react-router-dom";



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
  },
  body:{
    backgroundColor : '#1f5aba',
  },
  rooot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  iconButton: {
    padding: 10,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Header(props) {
  let [value, setValue] = useState()
  const onchange = (event) => {
    setValue(value = event ? event.target.value : '')

  }

  const keyPress = (e) => {
    if (e.keyCode == 13 && value !=='') {
      props.history.push(value)
      setValue(value = '')

    }
  }
  const SearchIconClick = () => {
    props.history.push(value)
    setValue(value = '')
  }

  const classes = useStyles();
  return (

    <div className={classes.root}>
      <AppBar position="static" className={classes.body}>
        <Toolbar>
          <LongMenu />
          <Typography variant="h6" className={classes.title}>
            <a href='/' style={{ color: "white", textDecoration: 'none' }} >Med.am</a>
          </Typography>
          <Paper className={classes.rooot}>
            <IconButton onClick={SearchIconClick} type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase id="standard-basic"
              label="Search"
              onChange={onchange}
              value={value}
              onKeyDown={keyPress}
              placeholder='Search'
            />
          </Paper>
          <Button color="inherit">
            <StyledBadge badgeContent={props.value} color="secondary">
              <AddShoppingCartIcon />
            </StyledBadge></Button>
          <a href='/SignIn' style={{ color: 'white', textDecoration: 'none' }}><Button color="inherit">Sign in</Button></a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header)

