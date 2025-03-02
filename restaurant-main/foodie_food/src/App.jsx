import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home';
import YourOrder from "./pages/yourOrder";
import { useState } from "react";
import { use } from "react";

function App() {
  const [orders , setOrders] = useState([]);
  useEffect(()=>{
    console.log(orders)
  },[orders])
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setOrders = {setOrders}/>}/>
          <Route path="/yourOrder" element={<YourOrder orders = {orders} setOrders = {setOrders}/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
