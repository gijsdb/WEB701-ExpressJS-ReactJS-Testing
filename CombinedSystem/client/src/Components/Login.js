import React from 'react';
import axios from 'axios'

export class Login extends React.Component {

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
      try {
        axios.post(`http://localhost:8091/login`, { email: this.state.email,password: this.state.password })
        .then(res => {
          console.log(res);
          console.log(res.data.user.email);
          this.setState({ 
            email: res.data.user.email, 
            error: null,
            success: "Logged in"
          });
          
        }).catch(error => {
          console.log(error.response)
        });
      } catch(err) {
        this.setState({error: err})
      }
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
                  name="email"
                  placeholder="email"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
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

  
  
//  export default connect(null, { login })(Login)
