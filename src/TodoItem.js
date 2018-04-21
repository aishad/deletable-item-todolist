import React, { Component } from 'react';
import './App.css';

class TodoItem extends Component {
  removeSelf = () => {
    this.props.deleteItem(this.props.index);  
  }
  render() {
    return (
      <li>
        {this.props.description}
        <button onClick={this.removeSelf} style={{"margin-left": "20px"}}>
          delete
          </button>
      </li>
    );
  }
}

export default TodoItem;
