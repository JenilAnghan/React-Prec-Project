import React, { useReducer, useState } from "react";
import { Button } from "reactstrap";

export default function UseReducercom() {
  const reducer = (state, action) => {
    // console.log(state,action)

    if (action === "INC") {
      return state + 1;
    }
    if (action === "DEC") {
      return state - 1;
    }
  };
  let [count, dispatch] = useReducer(reducer, 0);
  //   let [count, setCount] = useState(0);
  const addOne = () => dispatch("INC");
  const subOne = () => dispatch("DEC");

  return (
    <>
      <div className="m-0 p-5 border">
        <h1>Count is{count} </h1>
        <Button onClick={() => addOne()}>INC-1</Button>
        <Button onClick={() => subOne()}>DEC-1</Button>
        {/* <Button onClick={()=> }>INC-5</Button>
      <Button onClick={()=> }>DEc-5</Button> */}
      </div>
    </>
  );
}

// export default function UseReducercom() {
//     let [count, setCount] = useState(0);
//     const addOne= () => setCount(count+1)
//     const subOne= () => setCount(count-1)

//     return (
//       <>
//       <div className="m-0 p-5 border">
//         <h1>Count is{count} </h1>
//         <Button onClick={()=> addOne()}>INC-1</Button>
//         <Button onClick={()=> subOne()}>DEC-1</Button>

//         </div>
//       </>
//     );
//   }
