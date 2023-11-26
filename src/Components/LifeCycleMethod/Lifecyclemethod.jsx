
import { render } from "@testing-library/react";
import React, { Component,componentDidMount } from "react";

export default class Lifecyclemethod extends Component {
  constructor() {
    super();
    console.log("----------constructor----------", constructor);
  }

  componentDidMount(){
    console.log("-----componentdidmount-----",componentDidMount)
  }

  
  render() {
    console.log("----------render----------", render);
    return <div>LifeCycleMethod</div>;
  }
}
