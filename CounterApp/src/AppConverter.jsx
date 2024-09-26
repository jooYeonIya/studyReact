import { useState } from 'react'
import './App.css'

function App() {
  let [minutes, setMinutes] = useState(0);
  let [invert, setInvert] = useState(false);

  let handler = (event) => {
    setMinutes(event.target.value);
  }

  let reset = () => {
    setMinutes(0);
  }

  const inverted = () => {
    setInvert((cur) => !cur);
    setMinutes(0);
  }

  return (
    <>
      <h1>Converter from {!invert ? "minutes" : "hour"} to {!invert ? "hour" : "minutes"}</h1>
      <input type="number" id="minutes" value={!invert ? minutes : minutes*60} onChange={handler} step="60" disabled={invert}/>
      <label htmlFor="minutes">분</label>
      <input type="text" id="hour"  value={invert ? minutes : Math.round(minutes/60)} onChange={handler} disabled={!invert}/>
      <label htmlFor="hour">시간</label>
      <button onClick={reset}>reset</button>
      <button onClick={inverted}>{invert ? "시간을 분으로" : "분을 시간으로"}</button>
    </>
  )
}

export default App
