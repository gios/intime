import React from 'react';
import ReactDOM from 'react-dom';
import { VERSION, CURRENT_YEAR } from './constants.js';
import { Login } from './login/Login.js';

import './styles/base.scss';
import '../node_modules/font-awesome/scss/font-awesome.scss';

ReactDOM.render(<Login version={VERSION} currentYear={CURRENT_YEAR} />, document.getElementById('intime'));
