import { Button } from "reactstrap";
import { ArrowBigLeftDash } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function Sportsbike() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Sportsbike</h1>;
      <Button
        onClick={() => navigate(-1)}
        className="p-3 justify-content-center align-item-center d-flex border-dark "
        color="black"
      >
        <ArrowBigLeftDash />
      </Button>
    </>
  );
}
