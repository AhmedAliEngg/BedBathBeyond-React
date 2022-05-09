import React from "react";
import './App.css'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ShoppingCarts from "./Pages/ShoppingCarts";
function App() {
  return (
    <BrowserRouter>
    <Routes>

     <Route exact path="/" element={<Home/>}/>
     <Route exact path="/ShoppingCarts" element={<ShoppingCarts/>}/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
