import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>
            <Link to="/orderingtcs">
              Ordering Terms & Conditions
            </Link>
          </li>
          <li>
            <Link to="/privacypolicy">
              Policies
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}