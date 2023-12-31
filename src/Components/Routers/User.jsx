import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "reactstrap";

export default function User() {
  let navigate = useNavigate();

  const data = useParams()
  return (
    <>
      <h1>User {data?.name}</h1>
      <div className="p-3">
        <Button className="btn btn-danger" onClick={() => navigate(-1)}>
          Back To Home
        </Button>
      </div>
    </>
  );
}
