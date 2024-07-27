import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TopPages from "./pages/TopPages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/top" element={<TopPages />} />
      </Routes>
    </>
  );
}

export default App;
