import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavbarToggler, NavbarBrand, Nav, Button } from "reactstrap";

import RegisterModal from "./Model/RegisterModel";

function Headerrs(args) {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);

  const [registerModal, setRegisterModal] = useState(false);

  const registerToggle = () => setRegisterModal(!registerModal);

  return (
    <div>
      <RegisterModal modal={registerModal} toggle={registerToggle} />
      <Navbar style={{ width: "100vw" }} {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <ul className="d-flex gap-3">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <Button onClick={registerToggle} className="me-5" color="danger">
          Sign-Up{" "}
        </Button>
      </Navbar>
    </div>
  );
}

export default Headerrs;
