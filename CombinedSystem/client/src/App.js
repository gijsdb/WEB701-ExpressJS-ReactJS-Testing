import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./Components/Home"
import { Login } from "./Components/Login"

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <ul className="justify-content-center nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item my-auto">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
