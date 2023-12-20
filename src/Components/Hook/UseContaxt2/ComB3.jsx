import React from "react";
import { useContext } from "react";
import { NameContaxt, AgeContaxt } from "./UseMainContaxt";

export default function ComB3({ name3 }) {
  const data = useContext(NameContaxt);
  const data2 = useContext(AgeContaxt);

  return (
    <>
      <h1>1. My Name Is {name3}</h1>
      <h1>2. Age {data}</h1>
    </>
  );
}
