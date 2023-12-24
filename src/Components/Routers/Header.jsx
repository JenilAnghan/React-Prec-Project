import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import { NavItem } from "reactstrap";

export default function Header() {
  return (
    <>
      <div>
        <ul className="d-flex gap-3">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <NavItem>
            <NavLink to={"/components/"}>Components</NavLink>
          </NavItem>
        </ul>
      </div>
    </>
  );
}

// export default function Header() {
//     return (
//       <>
//             <div>
//             <ul  className="d-flex gap-3">
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>
//                 <Link to={"/contact"}>Contact</Link>
//               </li>
//             </ul>
//           </div>
//       </>
//     )
//   }
