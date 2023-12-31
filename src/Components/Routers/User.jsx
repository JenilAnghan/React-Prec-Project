import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

export default function User() {
  let navigate = useNavigate();
  return (
    <>
      <h1>User</h1>
      <div className="p-3">
        <Button className="btn btn-danger" onClick={() => navigate(-1)}>
          Back To Home
        </Button>
      </div>
    </>
  );
}
