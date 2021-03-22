import React from 'react';
import './index.css';
import App from './App';
import Contact from './Contact';
import Employee from './Employee';
import Typetest from './Typetest';

import logo from './../src/git.png';
import logo2 from './../src/linkLogo.png';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  
  
  export default function RouteFunction() {
  
    return (
      <Router>
        <div>
        <div className="classNavbar">
            <nav id="nav-bar">
                <ul>
                  <Link to='/'>
                      <li><a className="nav-link nav-link1" href="#home">HOME</a></li>
                  </Link>
                  <li><a className="nav-link nav-link1" href="#description">ABOUT</a></li>
                  <Link to='/typetest'>
                      <li><a className="nav-link nav-link1">TYPETEST</a></li>
                  </Link>
                  <Link to='/contact'>
                      <li><a className="nav-link nav-link1">CONTACT</a></li>
                  </Link>
                </ul>
                <ul className="rightNav">
                  <li><a className="nav-link nav-link2" id="git" href = "https://github.com/chemotharepy"><img id="logo" src={logo} alt="logo" /></a></li>
                  <li><a className="nav-link nav-link2" id="git" href = "https://www.linkedin.com/in/swapnil5harma/"><img id="logo2" src={logo2} alt="logo" /></a></li>
                </ul>
            </nav>
          </div>
          <Switch>
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/typetest" >
              <Typetest />
            </Route> 
            <Route path="/contact" >
              <Contact />
            </Route> 
            <Route path="/" component={App} />
             
          </Switch>
          
        </div>
      </Router>
    );
  }



