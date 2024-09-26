import { useState } from 'react'
import './App.css'
import ShareButton from './ShareButton'

function App() {
  let showAlert = () => {
    alert("text")
  }

  return (
    <>
      <ShareButton text="share" style= { {backgroundColor: "red", color: "green"} } showAlert={showAlert} />
      <ShareButton text="save" />
    </>
  )
}

export default App
