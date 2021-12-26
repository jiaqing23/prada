import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { makeStyles } from "@material-ui/styles";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: "120px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className="navbarPlatformTopRow">
        <div>
          <img src={Logo} alt="" />
          <p>PRADA</p>
        </div>
        <div className="navbarLinks">
          <Link to="/">
            <p>Overview</p>
          </Link>
          <Link to="/company">
            <p>Company</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div>
          <p>
            EN <i class="fas fa-chevron-down"></i>
          </p>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
