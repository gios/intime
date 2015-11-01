import React, { Component } from 'react';
import _ from 'lodash';
import history from '../history.js';
import { Footer } from '../footer/Footer.js';

export class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {registerBtn: false};
  }

  validationValues() {
    let username = this.refs.username.value,
        password = this.refs.password.value,
        rePassword = this.refs.rePassword.value;

    if (_.isEqual(password, rePassword) && !_.isEqual(username, '') && !_.isEqual(password, '')) {
      this.setState({registerBtn: true});
    } else {
      this.setState({registerBtn: false});
    }
  }

  logIn() {
    let username = this.refs.username.value,
        password = this.refs.password.value;

    console.log(username, password);
  }

  render() {
    return (
      <div className='registration-block'>
        <h1>Registration</h1>
        <span className='user-icon'></span><input type='text' placeholder='Username' ref='username' onChange={_.bind(this.validationValues, this)}/>
        <span className='password-icon'></span><input type='password' placeholder='Password' ref='password' onChange={_.bind(this.validationValues, this)}/>
        <span className='password-icon'></span><input type='password' placeholder='Re-Password' ref='rePassword' onChange={_.bind(this.validationValues, this)}/>
        <input className='type-checkbox' id='storage' type='checkbox' /><label htmlFor='storage'>Storage</label>
        <input className='type-checkbox' id='operator' type='checkbox' /><label htmlFor='operator'>Operator</label>
        <button disabled={!this.state.registerBtn} onClick={_.bind(this.logIn, this)}>Registration</button>
        <Footer />
      </div>
    );
  }
}
