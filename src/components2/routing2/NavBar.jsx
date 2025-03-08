// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles2/Navbar.css"; // We'll add styling for the navbar
import beansivyLogo from "../../images/beanivylogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-cafe-name">BEAN & IVY CAFÉ</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <img
        src={beansivyLogo}
        alt="outline of an ivy leaf growing out of a cup"
        style={{ width: "100%", maxWidth: "45px", height: "auto" }}
      ></img>
    </nav>
  );
};

export default Navbar;
