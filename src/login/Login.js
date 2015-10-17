import React, { Component } from 'react';
import _ from 'lodash';
import Firebase from '../Firebase';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.items = [];
  }

  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    );
  }
}
