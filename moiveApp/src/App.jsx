import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import './App.css'
import Detail from '../router/Detail'
import Info from '../router/Info'
import AppMovieList from './AppMovieList'
import { changeTitle } from '../src/changeTitle'

function App() {
  
  changeTitle("영화 사이트");

  return (
    <>
      <BrowserRouter>
      <Link to="/">AppMovieList Home</Link> <br />
      <Link to="/Info">Info</Link>
      <Routes>
        <Route path="/" element={<AppMovieList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
