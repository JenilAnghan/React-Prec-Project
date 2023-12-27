import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bikeservice() {
  return (
    <>
      <h1>Bikeservice</h1>
      <NavLink to={"/service/bike/sports"}>Sports</NavLink>
      <NavLink to={"/service/bike/normal"}>Normal</NavLink>
      <Outlet />
    </>
  );
}
