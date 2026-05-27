import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/view/Card";
import Signup from "./components/view/Signup";
import Login from "./components/view/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
