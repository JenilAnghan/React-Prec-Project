import React from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";

let nameArr = ["jenil", "nikunj", "jeel"];
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <h1>Home</h1>
    <div className="ps-3">
    <Button color="danger"   onClick={()=>navigate(-1)}>Go Back</Button>
    </div>
    </>
  );
}
