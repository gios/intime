import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import history from './history';
import { Login } from './login/Login.js';
import { Registration } from './registration/Registration.js';
import { NoMatch } from './NoMatch.js';

import './styles/base.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Login}>
      <Route path='login' component={Login} />
    </Route>
    <Route path='registration' component={Registration} />
    <Route path='*' component={NoMatch}/>
  </Router>
, document.getElementById('intime'));
