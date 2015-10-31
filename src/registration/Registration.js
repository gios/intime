import React, { Component } from 'react';
import { Footer } from '../footer/Footer.js';
import Parse from 'parse';

export class Registration extends Component {
  constructor(props) {
    super(props);
  }

  logIn() {
    let user = new Parse.User();
    user.set('username', 'User');
    user.set('password', '123');

    user.signUp(null, {
      success: function(user) {
        console.log(user);
      },
      error: function(user, error) {
        console.log('Error: ' + error.code + ' ' + error.message);
      }
    });
  }

  render() {
    return (
      <div className='registration-block'>
        <h1>Registration</h1>
        <span className='user-icon'></span><input type='text' placeholder='Username' ref='username' />
        <span className='password-icon'></span><input type='password' placeholder='Password' ref='password' />
        <span className='password-icon'></span><input type='password' placeholder='Re-Password' ref='re-password' />
        <input className='type-checkbox' id='storage' type='checkbox' /><label htmlFor='storage'>Storage</label>
        <input className='type-checkbox' id='operator' type='checkbox' /><label htmlFor='operator'>Operator</label>
        <button onClick={_.bind(this.logIn, this)}>Registration</button>
        <Footer />
      </div>
    );
  }
}
