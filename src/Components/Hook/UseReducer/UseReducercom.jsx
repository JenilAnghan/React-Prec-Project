import React, { useState } from "react";

export default function UseReducercom() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is{count} </h1>
      <Button>INC-1</Button>
      <Button>DEC-1</Button>
      <Button>INC-5</Button>
      <Button>DEc-5</Button>
    </>
  );
}
