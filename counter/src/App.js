import { useState } from 'react';
import './App.css';
import Button from './Button.js';
import P from './p.js';

// 앱은 불변 객체
function App() {
  let [counter, setCounter] = useState(0);

  console.log(counter);
  console.log(setCounter);

  return (
    // 하나의 태그만 반환하는 건 ok
    // 두개의 태그를 반환할 땐 <> 부모 태그로 하나 묶어서 반환하면 됨
    <>
      <P />
      <Button />
    </>
  );
}

export default App;
