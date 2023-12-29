import { Button } from "reactstrap";
import { ArrowBigLeftDash } from "lucide-react";
import React from "react";

export default function Sportsbike() {
  return (
    <>
      <h1>Sportsbike</h1>;
      <Button
        className="p-3 justify-content-center align-item-center d-flex border-dark "
        color="black"
      >
        <ArrowBigLeftDash />
      </Button>
    </>
  );
}
