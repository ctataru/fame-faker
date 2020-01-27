import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import FameFaker from './pages/FameFaker/index';
import './index.css';

function RouteHandler() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/app">
          <FameFaker />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<RouteHandler />, document.getElementById('root'));
