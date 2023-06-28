import React, { Component } from "react";
class Counter1 extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    let c = this.state.counter;
    c = c + 1;
    this.setState({
      counter: c,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>ADD</button>
      </div>
    );
  }
}
export default Counter1;
