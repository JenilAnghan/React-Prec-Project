import React from "react";
import ComB2 from "./ComB2";
import ComB3 from "./ComB3";

export default function ComB({ name }) {
  return (
    <>
      <ComB2 name2={name} />
      <ComB3 />
    </>
  );
}
