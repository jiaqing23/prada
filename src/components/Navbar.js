import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        // position="static"
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
              PRADA
            </Link>
          </Typography>

          <Link
            to="/overview"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <Button color="inherit">Overview</Button>
          </Link>
          <Link
            to="/company"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <Button color="inherit">Company</Button>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <Button color="inherit">Contact</Button>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
