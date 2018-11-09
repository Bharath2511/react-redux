import React, { Component } from "react";
import Minions from "./Minions";
import AddMinion from "./AddMinion";

class App extends Component {
  state = {
    minions: [
      { name: "Bob", age: "25", belt: "black", id: "0" },
      { name: "kevin", age: "20", belt: "blue", id: "1" },
      { name: "Mario", age: "15", belt: "green", id: "2" }
    ]
  };
  addMinion = minion => {
    //console.log(minion)
    minion.id = Math.random();
    let minions = [...this.state.minions, minion];
    this.setState({
      minions: minions
    });
  };
  //it fires when component gets mounted

  deleteMinion = id => {
    //console.log(id)
    let minions = this.state.minions.filter(minion => {
      //returns minions of different id
      return minion.id !== id;
    });

    this.setState({
      minions: minions
    });
  };

  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component updated");
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <p>Welcome</p>
        <Minions
          deleteMinion={this.deleteMinion}
          minions={this.state.minions}
        />
        <AddMinion addMinion={this.addMinion} />
      </div>
    );
  }
}

export default App;
