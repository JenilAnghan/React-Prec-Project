import React, { useState } from "react";
import { Input } from "reactstrap";

export default function Singleinput() {
  let [todo, settodo] = useState();
  let [alltodo, setalltodo] = useState();

  const getdata = (ele) => {
    settodo(ele.target.value);
  };

  const addtask = () => {
    setalltodo([...alltodo, todo]);
    settodo("");
  };
  return (
    <>
      {/* <h1>{todo}</h1> */}
      <div className="w-50 border border-dark rounded-3 p-4 mt-5 m-lg-5">
        <label>To Do</label>
        <Input
          value={todo}
          placeholder="Add Your Task"
          onChange={(e) => getdata(e)}
        />
        <button
          className="w-100 mt-3 "
          color="danger "
          onClick={() => addtask()}
        >
          {" "}
          Add{" "}
        </button>
      </div>
    </>
  );
}
