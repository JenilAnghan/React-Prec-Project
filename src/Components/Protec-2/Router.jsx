import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Error404 from "./Error404";

export default function Router() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <div
          style={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "lightgray",
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/" element={<Header />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
