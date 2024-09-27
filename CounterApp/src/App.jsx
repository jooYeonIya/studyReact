import { useState } from 'react'
import './App.css'
import CondComponent from './components/CondComponent';
import ShareButton from './components/ShareButton';


function App() {
  let [cond, setCond] = useState(false);
  let changeStatus = () => {
    setCond(!cond);
  }

  let style = () => {
    return cond 
      ? {backgroundColor: "red", color: "green"}
      : {backgroundColor: "blue", color: "orange"}
  }  
  
  return (
    <>
      {cond ? <CondComponent /> : null}
      {cond ? "참" : "거짓"}

      <br/>

      <ShareButton text={cond ? "로그아웃" : "로그인"} 
                         style={style()}
                         showAlert={changeStatus}/>
    </>
  )
}

export default App
