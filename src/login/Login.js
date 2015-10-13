import React, { Component } from 'react';
import _ from 'lodash';
import Firebase from '../Firebase';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.items = [];
  }

  componentWillMount() {
    var self = this;
    this.firebaseRef = new Firebase('https://ReactFireTodoApp.firebaseio.com/items');
    this.firebaseRef.on('child_added', function(dataSnapshot) {
      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));
  }

  render() {

    var iterate = _.each(this.state.items, function(item) {
      return (
        <div>
          <span>item.text</span>
        </div>
      );
    });

    return (
      <h1>
        Hello {iterate}
      </h1>
    );
  }
}
