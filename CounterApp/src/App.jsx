import { useState } from 'react'
import './App.css'
 
function App() {
  let [todo, setTodo] = useState("");
  let [todoList, setTodoList] = useState([]);

  const changeTodo = (event) => {
    setTodo(event.target.value)
  }

  const addTodoList = (event) => {
    event.preventDefault();
    if(!todo) return ;
    setTodo("");
    setTodoList((arr) => [...arr, todo]);
    console.log("내부" + todoList);
    // React의 상태 업데이트가 비동기적으로 처리되기 때문
    // setState 함수 (setTodoList처럼)를 호출할 때 상태가 즉시 업데이트되지 않음
    // setTodoList는 비동기적으로 동작하므로, todoList는 아직 업데이트된 상태를 반영하지 않음
    // 즉, setTodoList 직후에 출력되는 todoList는 업데이트 전의 상태를 출력
    // 투두리스트에 반영되는 시점은 setTodoList 함수의 실행이 끝난 즉시가 아니라, React가 상태 변경을 감지하고 컴포넌트가 다시 렌더링된 후
    // setTodoList와 setTodo에 의해 상태가 변경된 것을 감지하고 컴포넌트를 리렌더링 -> 렌더링이 끝나면 투두리스트 업데이트가 반영됨
  }

  console.log("외부" + todoList);

  return (
    <>
      <input type="text" value = {todo} placeholder="할 일을 입력하세요" onChange={changeTodo}/>
      <button onClick={addTodoList}>Add</button>
      <hr />
      {todoList.map(todo => <li>{todo}</li>)}
    </>
  )
}

export default App
