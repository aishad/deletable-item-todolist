import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem.js';

class App extends Component {
  constructor() {
    super();
    this.state = { items: [], textEntered: "" }
  }
  handleChange = (event) => {
    this.setState({ textEntered: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ items: this.state.items.concat(this.state.textEntered) })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.items.map(item => (<TodoItem description={item}/>))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.textEntered} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
