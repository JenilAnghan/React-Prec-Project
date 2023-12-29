import { ArrowBigLeftDash } from "lucide-react";
import React from "react";
import { Navigate, useNavigate } from "react-router";
import { Button } from "reactstrap";

export default function Normalbike() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Normalbike</h1>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        className="p-3 justify-content-center align-item-center d-flex border-dark "
        color="black"
      >
        <ArrowBigLeftDash />
      </Button>
    </>
  );
}
