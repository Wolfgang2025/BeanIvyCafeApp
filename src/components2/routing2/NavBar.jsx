import React from "react";
import { Link } from "react-router-dom";
import "../../styles2/Navbar.css"; // Navbar styling

const Navbar = () => {
  const logo = "/images/bean and ivy.avif"; // ✅ Correct public folder reference

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
      {/* Logo Image */}
      <img
        src={logo} // ✅ Fixed: Corrected path
        alt="Outline of an ivy leaf growing out of a cup"
        className="navbar-logo"
      />
    </nav>
  );
};

export default Navbar;
