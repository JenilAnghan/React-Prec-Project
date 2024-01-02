import React from "react";
import { NavLink } from "react-router-dom";
import { Button, NavItem } from "reactstrap";

export default function Header() {
  const loginHandler = () => {
    localStorage.setItem("login", JSON.stringify({ login: true }));
  };


  const logoutHandler = () => {

    localStorage.removeItem("login")
  };

  return (
    <>
      <div d-flex gap-3>
        <ul className="d-flex gap-3">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <NavItem>
            <NavLink to={"/components/"}>Profile</NavLink>
          </NavItem>
        </ul>

        <Button color="danger" onClick={loginHandler}>
          Login
        </Button>
        <Button color="danger" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </>
  );
}
