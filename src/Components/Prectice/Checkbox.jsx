import React, { useState } from "react";
import { Input, Label } from "reactstrap";

let alphabet = ["a", " b", "c", "d", "e", "f", "g", "h", "i", "j"];

export default function Checkbox() {
  let [selectIndex, setselectIndex] = useState([]);

  const selectHandler = (index) => {
    let available = selectIndex.includes(index);

    if (available) {
      let filter = selectIndex?.filter((e) => e !== index);
      setselectIndex(filter);
    } else {
      setselectIndex([...selectIndex, index]);
    }
  };
  return (
    <>
      <div>
        {alphabet?.map((e, i) => {
          return (
            <div className="d-flex gap-3 align-items-center">
              <Input
                onChange={() => selectHandler(i)}
                type="checkbox"
                checked={selectIndex.includes(i)}
              />
              <Label>
                <h1>{e}</h1>
              </Label>
            </div>
          );
        })}

        <div className="d-flex gap-3">
          {alphabet?.map((e, i) => {
            if (selectIndex?.includes(i)) {
              return <h1>{e}</h1>;
            }
            //   return selectIndex?.includes(i) && <h1>{e}</h1>;
          })}
        </div>
      </div>
    </>
  );
}
