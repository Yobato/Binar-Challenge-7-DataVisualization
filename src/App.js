// import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useState } from "react";
import Cars from "./Pages/Cars/Cars";
import Landing from "./Pages/Landing/Landing";
import CarList from "./Pages/CarList/CarList";
import CarDetail from "./Pages/CarDetail/CarDetail";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Home" element={<Home />} />
      <Route path="Search" element={<CarList />} />
      <Route path="Search/:id" element={<CarDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
}

export default App;
