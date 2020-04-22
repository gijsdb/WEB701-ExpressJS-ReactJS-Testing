import React from 'react';
import axios from 'axios';

export class Register extends React.Component {

    state = {
      email: '',
      password: '',
      error: '',
      success: ''
    }

    handleSubmit = event => {
      event.preventDefault();
  
      try {
        axios.post(`http://localhost:8091/register`, { email: this.state.email,password: this.state.password })
        .then(res => {
          console.log(res);
          console.log(res.data);
        }).catch(error => {
          console.log(error.response)
        });
      } catch(err) {
        this.setState({error: err})
      }
    }

    handleChangePassword = event => {
      this.setState({ password: event.target.value });
    }

    handleChangeEmail = event => {
      this.setState({ email: event.target.value });
    }

    render() {
      return (
        <div className="container padTop center">
            <div className="row">
              <div className="col">
                <h1>Register</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChangeEmail}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChangePassword}
                  />
                  <h2>{this.state.error}</h2><br/>
                  <h2>{this.state.success}</h2>
                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          </div>
      );
    }
  }
  
