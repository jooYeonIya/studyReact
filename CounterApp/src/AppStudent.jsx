import { useState } from 'react'
import './App.css'
import Components3 from './components/Components3';
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'

function App() {
  let [student2, setStudent] = useState(
    {
      id: 11,
      name: "kang",
      score: 100
    }
  )

  // 객체로 만들어서 보내기
  let student = {
    id: 1,
    name: "hong",
    score: 90
}

// 상태 업데이트 시 기존 객체의 불변성을 유지하기 위해서 스프레드 연산자를 사용
//...student를 사용하면 기존의 student 객체 속성 복사 후 score만 업데이트 = 즉, 기존의 값을 보존하면서 특정 속성만 변경 가능
let changescore = (e) => setStudent({...student2, score: e.target.value});
let addAge = (e) => setStudent({...student2, age: e.target.value});

// name을 쓰면 같은 name으로 value값을 넣을 수가 있음 = 하나의 함수로 여러 곳에서 사용 가능
let changeValue = (e) => {
  let {value, name} = e.target
  setStudent({...student2, [name]: value})
}

  return (
    <>
      <Components3 num={100} str="student" student={student}/>
      <Form1 student={student} changescore={changescore} />
      <br />
      <Form2 student={student2} addAge={addAge} />
      <br />
      <Form3 student={student2} changeValue={changeValue} />
    </>
  )
}

export default App
