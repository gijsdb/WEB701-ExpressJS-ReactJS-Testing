import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux'


import { Home } from "./Components/Home"
import Login from "./Components/Login"
import ProtectedRoute from './Components/ProtectedRoute'
import Marketplace from './Components/Marketplace'
import Navigation from './Components/Navigation'
import Hop from './Components/Hop'
import { Register } from "./Components/Register"

import './App.css';

class App extends React.Component {
  render() {  
    return (
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <ProtectedRoute path="/marketplace" loggedIn={this.props.isUserLoggedIn} component={Marketplace} />
          <ProtectedRoute path="/hop/:id" loggedIn={this.props.isUserLoggedIn} component={Hop} />
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