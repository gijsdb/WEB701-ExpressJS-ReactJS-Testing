import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'

import { Home } from "./Components/Home"
import Login from "./Components/Login"
import ProtectedRoute from './Components/ProtectedRoute'
import Marketplace from './Components/Marketplace'
import { Register } from "./Components/Register"

import './App.css';

class App extends React.Component {

  render() {  
    return (
      <Router>
        <nav>
          <ul className="justify-content-center nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item my-auto">
              {this.props.isUserLoggedIn === false &&
                <Link to="/login">Login</Link>
              }
            </li>
            <li className="nav-item my-auto">
                {this.props.isUserLoggedIn === false &&
                  <Link to="/register">Register</Link>
                }
            </li>
            <li className="nav-item my-auto">
                {this.props.isUserLoggedIn === true &&
                  <Link to="/marketplace">Marketplace</Link>
                }
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <ProtectedRoute path="/marketplace" loggedIn={this.props.isUserLoggedIn} component={Marketplace} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) { //redux mapping part
  return { 
    token: state.authReducer.token,
    user: state.authReducer.user,
    isUserLoggedIn: state.authReducer.isUserLoggedIn
  }
}

export default connect(mapStateToProps)(App) //redux connecting