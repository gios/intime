import React, { Component } from 'react';
import { Footer } from '../footer/Footer.js';

export class Registration extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='registration-block'>
        <h1>Registration</h1>
        <span className='user-icon'></span><input type='text' placeholder='Username' id='username' />
        <span className='password-icon'></span><input type='password' placeholder='Password' id='password' />
        <span className='password-icon'></span><input type='password' placeholder='Re-Password' id='re-password' />
        <input className='type-checkbox' id='storage' type='checkbox' /><label htmlFor='storage'>Storage</label>
        <input className='type-checkbox' id='operator' type='checkbox' /><label htmlFor='operator'>Operator</label>
        <button>Registration</button>
        <Footer />
      </div>
    );
  }
}
