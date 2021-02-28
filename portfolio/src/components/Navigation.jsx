import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <div class="navigation">
        <div class="nav">
            <NavLink to="/" class="link" activeClassName="active">Work</NavLink>
            <NavLink to="/about" class="link" activeClassName="active">About</NavLink>
        </div>
    </div>
  );
}

export default withRouter(Navigation);