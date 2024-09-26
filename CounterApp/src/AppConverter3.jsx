import { useState } from 'react'
import './App.css'
import TimeConverter from './TimeConverter'
import LengthConverter from './LengthConverter'
import DistanceConverter from './DistanceConverter'

function App() {
  let [option, setOption] = useState("0");

  const handleOption = (event) => {
    setOption(event.target.value)
  }

  return (
    <>
      <h1>Converter</h1>
      <select name="type" id="select" value={option} onChange={handleOption}>
        <option value="0">select unit</option>
        <option value="1">time</option>
        <option value="2">distance</option>
        <option value="3">length</option>1
      </select>

      {option == 0 ? "select!" : null}
      {option == 1 ? <TimeConverter /> : null}
      {option == 2 ? <LengthConverter /> : null}
      {option == 3 ? <DistanceConverter /> : null}
    </>
  )
}

export default App
