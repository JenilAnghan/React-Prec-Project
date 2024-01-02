import React from "react";
import Home from "../ui/Pages/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Error404 from "../ui/Pages/Error404";
import Header from "../ui/Pages/Header";
import Headerrs from "../ui/Components/Headerrs";





export default function ProtectedRoter() {
  return (
    <>
      <BrowserRouter>
        <Headerrs />
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgrey",
          }}
          className="d-flex justify-contact-center align-items-center"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />

            {/* <Home/>
        <Contact/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
