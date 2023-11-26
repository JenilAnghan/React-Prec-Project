import { render } from "@testing-library/react";
import React, {
  Component,
  componentDidMount,
  componentDidUpdate,
  count,
} from "react";

export default class Lifecyclemethod extends Component {
  constructor() {
    super();
    console.log("----------constructor----------", constructor);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("-----componentdidmount-----", componentDidMount);
  }

  componentDidUpdate() {
    console.log("-----componentDidUpdate-----", componentDidUpdate);
  }

  render() {
    console.log("----------render----------", render);
    return (
      <>
        <div>LifeCycleMethod</div>
        <h1>Count is {this.state.count}</h1>
        <button
          style={{ color: "white", backgroundColor: "lightblue" }}
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Inc
        </button>
      </>
    );
  }
}
