// src/components/Navbar.js
/*import React from "react";
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
          <Link to="/menu">Menu</Link>
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
        style={{ width: "100%", maxWidth: "100px", height: "auto" }}
      ></img>
    </nav>
      );
    }
  );
};

export default Navbar;
*/

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../../styles2/Navbar.css"; // We'll add styling for the navbar


const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">Coffee Logo</div>
      <ul className={`nav-links ${isNavActive ? 'nav-active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className={`burger ${isNavActive ? 'toggle' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;