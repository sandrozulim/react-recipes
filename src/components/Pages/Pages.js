import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Popular from "./Popular";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
    </Routes>
  );
}

export default Pages;
