import React, { Component } from 'react';
import Minions from './minions'
import AddMinion from './AddMinion'


class App extends Component {
  state = {
    minions: [  { name:"Bob", age:"25",belt:"black", id:"0"},
    { name:"kevin", age:"20",belt:"blue", id:"1"},
    { name:"Mario", age:"15",belt:"green", id:"2"}
] }
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>Welcome</p>
        <Minions minions={this.state.minions} />
        <AddMinion />
     </div>
    );
  }
}

export default App;
