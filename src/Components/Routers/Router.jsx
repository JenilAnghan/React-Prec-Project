import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error404 from "./Error404";
import Header from "./Header";
import Headerrs from "./Headerrs";
import About from "./About";
import service from "./service/Service";
import Bikeservice from "./service/Bikeservice";
import Carservice from "./service/Carservice";
import Sportsbike from "./service/Bike/Sportsbike";
import Normalbike from "./service/Bike/Normalbike";
export default function router() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
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
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service">
              <Route index Component={service} />

              <Route path="car" Component={Carservice} />
              <Route path="bike">
                <Route index Component={Bikeservice} />
                <Route path="sports" element={<Sportsbike />} />
                <Route path="normal" element={<Normalbike />} />
              </Route>
            </Route>
            <Route path="*" element={<Error404 />} />

            {/* <Home/>
        <Contact/> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
