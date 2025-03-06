// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../../styles2/Navbar.css"; // We'll add styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-cafe-name">Bean & Ivy Cafe</h1>
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
    </nav>
  );
};

export default Navbar;
