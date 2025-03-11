import React from "react";
import { Link } from "react-router-dom";
import "../../styles2/Navbar.css"; // Navbar styling
import logo from "../../images/bean_ivy_logo.jpg"; // ✅ added back as import (z)

const Navbar = () => {
  // const logo = "../../images/bean_ivy_logo.jpg"; // 🥀 This code did not work in my vscode (zv)

  return (
    <nav className="navbar">
      {/* <h1 className="navbar-cafe-name">BEAN & IVY CAFÉ</h1> */}
      <img
        src={logo} // ✅ Fixed: Corrected path
        alt="Outline of a coffee bean and ivy leaf with the words written underneath: Bean & Ivy"
        className="navbar-logo"
      />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
