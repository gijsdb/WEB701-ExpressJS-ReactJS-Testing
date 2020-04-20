import React from 'react';

export class Register extends React.Component {
    render() {
      return (
        <div class="container padTop center">
            <div class="row">
              <div class="col">
                <h1>Register</h1>
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
                <div class="error padTop" v-html="error"/><br/>
                <div class="success" v-html="successMessage"/><br/>
                <button>Register</button>
              </div>
            </div>
          </div>
      );
    }
  }
  
