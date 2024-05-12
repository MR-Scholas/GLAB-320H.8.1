import React from 'react'
import "./style.css"

import { Route, Routes } from "react-router-dom"
import Currencies from "./pages/currencies"
import Main from "./pages/main"
import Price from "./pages/price"
import Nav from "./components/nav"

export default function app() 
{
  return (
    <div className="App">
        <Nav/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="currencies" element={<Currencies/>}/>
            <Route path="price" element={<Price/>}/>
            <Route path="/price/:symbol" element={<Price/>}/>
        </Routes>    
    </div>
  )
}
