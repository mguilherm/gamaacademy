import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { readConfigFile } from "typescript";

import Home from "./views/Home";
import Contact from "./views/Contact";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
