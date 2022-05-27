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
import FormAdd from "./Pages/Form/FormAdd";
import Login from "./Pages/Login/Login";
import Transaction from "./Pages/Transaction/Transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/Search" element={<CarList />} />
      <Route path="/Search/:id" element={<CarDetail />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/success" element={<Transaction />} />
      <Route path="/addForm" element={<FormAdd />} />
    </Routes>
  );
}

export default App;
