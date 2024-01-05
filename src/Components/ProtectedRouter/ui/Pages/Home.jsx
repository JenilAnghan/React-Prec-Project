import { Check } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Button, Input } from "reactstrap";

let nameArr = ["jenil", "nikunj", "jeel"];
export default function Home() {
  const navigate = useNavigate();

  let [check, setCheck] = useState(["male", "female"]);

  const checkHandler = (item) => {
    const matchItem = check?.includes(item);
    if (matchItem) {
      let filter = check?.filter((e) => e !== item);
      setCheck(filter);
    } else {
      setCheck([...check, item]);
    }
  };

  return (
    <>
      <div className="ps-3 d-flex flex-column">
        <h1>Home</h1>
        {check.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
        <Input
          checked={check?.includes("male")}
          onClick={() => checkHandler("male")}
          type="checkbox"
        />
        <label check>Male</label>
        <Input
          checked={check?.includes("female")}
          onClick={() => checkHandler("female")}
          type="checkbox"
        />
        <label check>FeMale</label>
        <Input
          checked={check?.includes("kids")}
          onClick={() => checkHandler("kids")}
          type="checkbox"
        />
        <label check>Kids</label>

        <Button color="danger" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
}
