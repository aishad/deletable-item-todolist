import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  render() {
    return (
      <li> {this.props.description} </li>
    );
  }
}

export default TodoItem;
