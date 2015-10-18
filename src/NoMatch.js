import React, { Component } from 'react';

export class NoMatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='wrong-route'>
        Oops, wrong route!
      </div>
    );
  }
}
