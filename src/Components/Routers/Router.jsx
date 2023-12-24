import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Error404";

export default function router() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />

          {/* <Home/>
        <Contact/> */}
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
