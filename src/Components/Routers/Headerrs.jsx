import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function HeaderRS(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand className="ps-0" href="/">
          reactstrap
        </NavbarBrand>

        <Nav className="me-auto gap-3">
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/service">Service</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/profilepage">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default HeaderRS;

// <div>
// <Navbar style={{ width: "100vw" }} {...args}>
//   <NavbarBrand href="/">reactstrap</NavbarBrand>
//   <NavbarToggler onClick={toggle} />
//   <Collapse isOpen={isOpen} navbar>
//     <Nav className="me-auto gap-3" navbar>
//       <NavItem>
//         <NavLink to="/">Home</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink to="/service">Service</NavLink>
//       </NavItem>
//       <NavItem>
//         <NavLink to="/contact">Contact Us</NavLink>
//       </NavItem>
//     </Nav>
//   </Collapse>
// </Navbar>
// </div>
