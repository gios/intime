import React, { Component } from 'react';
import _ from 'lodash';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.items = [];
  }

  render() {
    return (
      <div className='login-block'>
        <h1>Login</h1>
        <input type='text' placeholder='Username' id='username' />
        <input type='password' placeholder='Password' id='password' />
        <button>Submit</button>
      </div>
    );
  }
}
