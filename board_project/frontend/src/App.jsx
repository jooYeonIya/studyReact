import { useState } from 'react'
import './App.css'
import Home from './router/Home'
import Save from './router/Save'
import List from './router/List'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/List' element={<List />} />
          <Route path='/save' element={<Save />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
