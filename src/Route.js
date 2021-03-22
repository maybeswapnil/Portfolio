import React from 'react';
import './index.css';
import App from './App';
import Contact from './Contact';
import Employee from './Employee';
import { useHistory } from 'react-router-dom';

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
          <Switch>
          <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <App history={useHistory()} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }



