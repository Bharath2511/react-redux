import React, { Component } from 'react';
import Minions from './minions'


class App extends Component {
  state = {
    minions: [  { name:"Bob", age:"25", id:"0"},
    { name:"kevin", age:"20", id:"1"},
    { name:"Mario", age:"15", id:"2"}
] }
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>Welcome</p>
        <Minions minions={this.state.minions} />
     </div>
    );
  }
}

export default App;
