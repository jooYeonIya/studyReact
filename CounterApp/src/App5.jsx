import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import NewButton from './NewButton'
import Viewer from './Viewer'
import Input from './Input'
 
function App() {
  let [count, setCount] = useState(0)
  let [text, setText] = useState("")

  const changeCount = () => setCount(count + 1);
  const changeText = (e) => setText(e.target.value);
  
  // console.log("rendered")
  // console.log(count)
  // console.log(text)

  // []으로 놓으면 처음에만 실행됨
  useEffect(() => console.log("mount 됨!"), []);
  
  // []의 값이 설정될 때마다 실행됨 (초기값 설정 및 값 변경)
  useEffect(() => console.log("count가 변경됨!"), [count, text]);

  return (
    <>
      <Viewer count = {count} />
      <NewButton text = "click" func = {changeCount}/>
      <br />
      <Input text = {text} func = {changeText}/>
    </>
  )
}

export default App
