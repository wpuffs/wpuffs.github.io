import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div class="navigation">
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <div className={`nav ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" className="link" activeClassName="active" onClick={toggleMenu}>
          Work
        </NavLink>
        <NavLink to="/about" className="link" activeClassName="active" onClick={toggleMenu}>
          About
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Navigation);