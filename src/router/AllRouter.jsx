// import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import About from "../pages/About";
import Conteact from "../pages/Conteact";
import Login from "../pages/Login";
import Sinup from "../pages/Sinup";

export default function AllRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/conteact" element={<Conteact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/sinup" element={<Sinup/>}></Route>
      </Routes>
    </div>
  );
}
