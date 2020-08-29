import React from 'react';
import './App.css';
import "firebase/auth";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Logoutstate() {
  return (
    <>
      <Link to="/SignIn" style={{ color: 'white', textDecoration: 'none', }}>
        <Button color="inherit">Sign in</Button>
      </Link>
    </>
  );

}
export default Logoutstate;



