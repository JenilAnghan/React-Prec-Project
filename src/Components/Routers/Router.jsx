import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import Headerrs from "./Headerrs";
import About from "./About";

export default function router() {
  return (
    <>
      <BrowserRouter>
    {/* <Header/> */}
    <Headerrs/>
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
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/about" element={<About />} />




            {/* <Home/>
        <Contact/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
