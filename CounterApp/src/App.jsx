import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Header from './components/TodoList/Header'
import TodoEditor from './components/TodoList/TodoEditor'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todo, setTodo] = useState([{
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getDate()
  }])

  let idRef = useRef(1);

  const createTodo = (content) => {
    const newTodoItem = {
      id: idRef.current,
      isDone: false,
      content,
      date: new Date().getDate()
    }

    setTodo([...todo, newTodoItem]);
    idRef.current += 1; 
  }

  const deleteTodo = (id) => {
    setTodo(todo.filter((it) => it.id !== id));
  }

  return (
    <>
      <Header />
      <TodoEditor onCreate={createTodo}/>
      <TodoList todo={todo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
