import { useState } from 'react';
import './App.css';

// 앱은 불변 객체
function App() {
  let [counter, setCounter] = useState(0);

  let onclick = () => setCounter(counter + 1);

  console.log(counter);
  console.log(setCounter);

  return ( 
    <>
      <p className="App">{counter} click</p>
      <button onClick={onclick}>click</button>
    </>
  );
}

export default App;
