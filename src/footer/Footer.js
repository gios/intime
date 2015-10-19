import React, { Component } from 'react';
import { VERSION, CURRENT_YEAR } from '../constants.js';

export class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer'>
        <div className='info-footer'>
          &copy; {CURRENT_YEAR} Version {VERSION}
        </div>
      </div>
    );
  }
}
