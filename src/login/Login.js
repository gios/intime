import React, { Component } from 'react';
import _ from 'lodash';
import Parse from 'parse';
import { Footer } from '../footer/Footer.js';
import history from '../history.js';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.items = [];
  }

  componentWillMount() {
    let user = new Parse.User();
    // history.replaceState(null, '/some/path')
  }

  signUp() {
    let user = new Parse.User();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    user.set('username', username);
    user.set('password', password);
    Parse.User.logIn('myname', 'mypass', {
      success: function(user) {
        console.log(user);
      },
      error: function(user, error) {
        console.log(user, error);
      }
    });
  }

  render() {
    return (
      <div className='login-block'>
        <h1>Login</h1>
        <span className='user-icon'></span><input type='text' placeholder='Username' ref='username' />
        <span className='password-icon'></span><input type='password' placeholder='Password' ref='password' />
        <button onClick={_.bind(this.signUp, this)}>Submit</button>
        <Footer />
      </div>
    );
  }
}
