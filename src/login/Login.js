import React, { Component } from 'react';
import _ from 'lodash';
import history from '../history.js';
import { Footer } from '../footer/Footer.js';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {loginBtn: false};
  }

  validationValues() {
    let username = this.refs.username.value,
        password = this.refs.password.value;

    if (!_.isEqual(username, '') && !_.isEqual(password, '')) {
      this.setState({loginBtn: true});
    } else {
      this.setState({loginBtn: false});
    }
  }

  signUp() {
    let username = this.refs.username.value,
        password = this.refs.password.value;

    console.log(username, password);
  }

  render() {
    return (
      <div className='login-block'>
        <h1>Login</h1>
        <span className='user-icon'></span><input type='text' placeholder='Username' ref='username' onChange={_.bind(this.validationValues, this)}/>
        <span className='password-icon'></span><input type='password' placeholder='Password' ref='password' />
        <button disabled={!this.state.loginBtn} onClick={_.bind(this.signUp, this)}>Submit</button>
        <Footer />
      </div>
    );
  }
}
