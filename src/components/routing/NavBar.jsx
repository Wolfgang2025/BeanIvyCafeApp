import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* <Link className="navbar-brand" to="/">
          Bean & Ivy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Visit Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Basket
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
