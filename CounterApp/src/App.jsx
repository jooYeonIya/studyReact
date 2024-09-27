import { useState } from 'react'
import './App.css'
import Header from './components/TodoList/Header'
import TodoEditor from './components/TodoList/TodoEditor'


function App() {

  return (
    <>
      <Header />
      <TodoEditor />
    </>
  )
}

export default App
