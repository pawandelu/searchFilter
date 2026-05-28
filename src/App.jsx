import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/view/Card";
import Signup from "./components/view/Signup";
import Login from "./components/view/Login";
import Forget from "./components/view/Forget";
import Reset from "./components/view/Reset";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
