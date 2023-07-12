import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return (
        <nav className="footer-navbar">
        <ul className="footer-nav-links">
        <li><Link to="/home">Home</Link></li>
          <li><a href=''>Chi Siamo</a></li>
          <li><Link to="/rogge">Le Rogge</Link></li>
          <li><a href="">Quiz Roggioso</a></li>
          <li><Link to="/terms">Regole del profilo, ed indicazioni sulle rogge</Link></li>
        </ul>
      </nav>
    );
}

export default Navbar;