import React from 'react';
import { connect } from 'react-redux' 
import { loginUser } from '../Actions/authActions'

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        error: '',
        success: ''
      };

      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.dispatch(loginUser(this.email.value, this.password.value));
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      return (
        <div className="container padTop center">
          <div className="row">
            <div className="col">
              <h1>Login</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <form onChange={this.onChange} onSubmit={this.onSubmit}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email"
                  ref={node => this.email = node}
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  ref={node => this.password = node}
                />
                <p>{this.state.error}</p><br/>
                <p>{this.state.success}</p>
                  <button>Login</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  function mapStateToProps(state) { //redux mapping part
    return { 
      token: state.authReducer.token,
      user: state.authReducer.user
    }
  }

  export default connect(mapStateToProps)(Login) //redux connecting