import React from 'react';
import { connect } from 'react-redux' 
import { Link } from "react-router-dom";

import { logoutUser } from '../Actions/authActions'


class Navigation extends React.Component {

    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
    }

    logout() {
      this.props.dispatch(logoutUser());
    }

    render() {
      return (
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
            <li className="nav-item my-auto">
                {this.props.isUserLoggedIn === true &&
                    <button onClick={this.logout}>Logout</button>
                }
            </li>
            </ul>
        </nav>
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

  export default connect(mapStateToProps)(Navigation) //redux connecting