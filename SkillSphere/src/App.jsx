import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from "./components/Login";
import Header from "./components/Header";


export default function App() {

  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/login" element = {<Login />} />
  </Routes>
  </BrowserRouter> 
}