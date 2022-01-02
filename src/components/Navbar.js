import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarPlatform">
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
      <div className="navbarPlatformBottomRow">
        <div>
          <p>RESEARCH (COMPANY / RESEARCH NAME)</p>
          <button>
            <i class="fas fa-search"></i> SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
