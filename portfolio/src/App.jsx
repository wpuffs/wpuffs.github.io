import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { Navigation, Home, About, PetCaringApp, UniversityFinderApp, RedesignGVWebsite } from "./components";

import CatlasApp from './components/CatlasApp';
import ERApp from './components/ERApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Router>
          <ScrollToTop />
          <div className="nav-container">
            <Navigation />
          </div>

          <div className="main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/catlas" component={CatlasApp} />
              <Route exact path="/emergency-department-app" component={ERApp} />
              <Route exact path="/pet-caring-app" component={PetCaringApp} />
              <Route exact path="/university-finder-app" component={UniversityFinderApp} />
              <Route exact path="/redesign-gv-website" component={RedesignGVWebsite} />
            </Switch>
          </div>
        </Router>
        </div>
    </div>
  );
}

export default App;