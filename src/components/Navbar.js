import React from "react";
import { NavLink } from "react-router-dom";
import "../component-css/Navbar.css";
import logo from "../images/logo-only.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink className="nav-link-logo" to="/">
          <img className="nav-logo" src={logo} alt="jy-logo" />
          <p className="logo-name">Jesus Youth Rajagiri</p>
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/team">
          Team
        </NavLink>
        <NavLink className="nav-link" to="/events">
          Events
        </NavLink>
        <NavLink className="nav-link" to="/gallery">
          Gallery
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
