import React, { Component } from 'react';
import Minions from './minions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>Welcome</p>
        <Minions name="Bob" age="25" belt="black"  />
        <Minions name="Kevin" age="25" belt="black"  />
      </div>
    );
  }
}

export default App;
