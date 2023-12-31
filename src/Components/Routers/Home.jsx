import React from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Button } from "reactstrap";

let nameArr = ["jenil", "nikunj", "jeel"];
export default function Home() {
  const navigate = useNavigate();


  let [searchparames, setSearchParames] = useSearchParams();

  return (
    <>
      <div className="d-flex flex-column">
        <h1>Home</h1>

        <ul>
          {nameArr.map((e, i) => {
            return (
              <li
                key={i}
                className="text-capitalize"
                role="button"
                onClick={() => navigate(`/user/${e}`)}
              >
                {e}
              </li>
            );
          })}

          <li role="button" onClick={() => navigate("/user/nikunj")}>
            Nikunj
          </li>
        </ul>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    </>
  );
}
