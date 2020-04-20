import React from 'react';

export class Login extends React.Component {
    render() {
      return (
        <div class="container padTop center">
          <div class="row">
            <div class="col">
              <h1>Login</h1>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                type="text"
                name="email"
                v-model="email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="password"
              />
              <div class="error" v-html="error"/><br/>
                <button>Login</button>
            </div>
          </div>
        </div>
      );
    }
  }
  
