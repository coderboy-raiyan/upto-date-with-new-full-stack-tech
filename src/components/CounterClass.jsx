import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const handleCounter = () => {
      this.setState((prevCounter) => {
        return { counter: prevCounter.counter + 1 };
      });
      this.setState((prevCounter) => {
        return { counter: prevCounter.counter + 1 };
      });
    };

    return <h1 onClick={handleCounter}>{this.state.counter}</h1>;
  }
}
