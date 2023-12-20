import React, { useContext } from "react";
import { NameContaxt, AgeContaxt } from "./UseMainContaxt";

export default function ComA() {
  const data = useContext(NameContaxt);
  const { age } = useContext(AgeContaxt);

  return (
    <>
      <h1>Name{data}</h1>
      <h1>Age{age}</h1>
    </>
  );
}
