import React from "react";
import { Link } from "react-router-dom";
import "../../styles2/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <ul>
          <li>
            <Link to="/orderingtcs">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacypolicy">Policies</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
