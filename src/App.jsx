import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/shared/NavBar";
import FloatMessage from "./components/shared/FloatMessage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <FloatMessage />
    </>
  );
}

export default App;
