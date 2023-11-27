import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Lifepro extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      count: 0,
    };
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidUpdate(Preprops, Prestate) {
    if (this.state.count === 5 && Prestate.color !== "red") {
      alert("Color is chnaged");
      this.setState({ color: "red" });
    }
  }
  render() {
    return (
      <>
        {/* <h1>Point is {this.state.point}</h1> */}
        <h1 style={{ color: this.state.color }}>Count is {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}> incremrnt </button>
      </>
    );
  }
}
