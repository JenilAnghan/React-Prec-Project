import React, { Component } from "react";
import { Button } from "reactstrap";

export default class Lifepro extends Component {
  constructor() {
    super();
    this.state = {
      point: 0,
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Point is {this.state.point}</h1>
        <h1>Count is {this.state.count}</h1>
        <button>incremrnt </button>
      </>
    );
  }
}
