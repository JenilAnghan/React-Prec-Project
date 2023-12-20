import React, { createContaxt, useState } from "react";
import ComA from "./ComA";
import ComB from "./ComB";
import { createContext } from "react";

export const NameContaxt = createContext();
export const AgeContaxt = createContext();

export default function UseMainContaxt() {
  let [name, setname] = useState("jenil");
  let [age, agename] = useState(23);

  return (
    <>
      <NameContaxt.Provider value={name}>
        <ComB name={name} />
        <AgeContaxt.Provider value={{ age: age }}>
          <ComA />
        </AgeContaxt.Provider>
      </NameContaxt.Provider>
    </>
  );
}
