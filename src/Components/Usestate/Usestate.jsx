import React, { useState } from "react";

export default function Usestate() {
  const colorArr = ["pink", "lightblue", "green", "blue"];
  let [index, setIndex] = useState(0);
  const changeIndex = () => {
    if (index === 3) {
      return null;
    }
    setIndex(index + 1);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
      <h1>{index}</h1>
      <div
        style={{
          padding: "10px",
          textAlign: "center",
          backgroundColor: colorArr[index],
        }}
        className="m-5"
      >
        <h1>Hello world</h1>
      </div>

      <button color="denger" onClick={() => changeIndex()}>
        Change Color
      </button>
    </div>
  );
}
