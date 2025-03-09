import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from "./components/Login";
import Header from "./components/Header";
import Signin from "./components/Signin";

export default function App() {

  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element = {<Home />} />
    <Route path="/login" element = {<Login />} />
    <Route path="/signin" element = {<Signin />}/>
  </Routes>
  </BrowserRouter> 
}