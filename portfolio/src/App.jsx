import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { Navigation, Home, About, PetCaringApp, UniversityFinderApp } from "./components";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <div className="nav-container">
            <Navigation />
          </div>

          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/pet-caring-app" component={PetCaringApp} />
              <Route exact path="/university-finder-app" component={UniversityFinderApp} />
            </Switch>
          </div>
        </Router>
        </div>
    </div>
  );
}

export default App;
