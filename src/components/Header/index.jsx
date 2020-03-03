import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div class="navbar-brand"><span>N</span>ilesh <span>P</span>atel</div>
        <ul className="linkList">
          <li>
            <NavLink 
              exact to="/"
              className="link" 
              // activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className="link"
              // activeClassName="active"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className="link" 
              // activeClassName="active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
