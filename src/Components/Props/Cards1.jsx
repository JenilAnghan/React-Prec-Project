import React from "react";
import Data from "../../Product_Data/Product.json";
import Cards from "./Cards";

export default function Cards1() {
  return (
    <>
      <div
        className="d-flex flex-wrap gap-2 m-5 p-3"
        style={{ backgroundColor: "lightblue" }}
      >
        {Data.map((e) => {
          return <Cards data={e} />;
        })}
      </div>
    </>
  );
}
