import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { Login } from './login/Login.js';
import { NoMatch } from './NoMatch.js';

import './styles/base.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';

ReactDOM.render(
  <Router>
    <Route path="/" component={Login}>
      <Route path="login" component={Login} />
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
, document.getElementById('intime'));
