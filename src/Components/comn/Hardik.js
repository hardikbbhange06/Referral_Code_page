import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Shubha/Home'
import Contact from '../Shubha/Contact'

function Hardik() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/src/Componets/Shubha/Contact.js' element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Hardik;