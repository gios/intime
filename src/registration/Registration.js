import React, { Component } from 'react';
import { VERSION, CURRENT_YEAR } from '../constants.js';

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
        <button>Registration</button>
        <div className='footer'>
          <div className='info-footer'>
            &copy; {CURRENT_YEAR} Version {VERSION}
          </div>
        </div>
      </div>
    );
  }
}
