import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Home from '../router/Home'
import Detail from '../router/Detail'
import Info from '../router/Info'

function App() {

  return (
    <>
      <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/Detail">Detail</Link>
      <br />
      <Link to="/Info">Info</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
