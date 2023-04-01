import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./assets/logo.png";
import { Login, Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <header
        className="w-full flex justify-between items-center bg-white sm:px-8 px-4 
      py-4 border-b border-b-[#e6ebf4]"
      >
        <img src={logo} alt="faceprep" className="w-28 object-contain" />
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
