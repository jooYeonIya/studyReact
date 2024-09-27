import { useState } from 'react'
import './App.css'
import Header from './components/TodoList/Header'
import TodoEditor from './components/TodoList/TodoEditor'
import TodoList from './components/TodoList/TodoList'


function App() {

  return (
    <>
      <Header />
      <TodoEditor />
      <TodoList />
    </>
  )
}

export default App
