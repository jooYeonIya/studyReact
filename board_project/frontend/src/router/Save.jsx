import { useState } from "react"
import axios from 'axios'

function Save() {
    const [board, setBoard] = useState({
        boardTitle: "",
        boardWirter: "",
        boardPwd: "",
        boardContents: ""
    });

    const inputUpdate = (e) => {
        const {name, value} = e.target;
        setBoard({
            ...board, [name] : value
        })
    }

    const boardSave = async (e) => {
        e.preventDefault();
        let res = await axios.post("http://localhost:3003/board/save", {board});
        console.log(res);
        setBoard("");
    }

    return (
      <>
        <h1>save</h1>
        <form action="" method="post">
            제목 : <input type="text" name="boardTitle" value={board.boardTitle || ""} onChange={inputUpdate}/>
            작성자 : <input type="text" name="boardWirter" value={board.boardWirter || ""} onChange={inputUpdate}/>
            비밀번호 : <input type="password" name="boardPwd" value={board.boardPwd || ""} onChange={inputUpdate}/>
            내용 : <input type="text" name="boardContents" value={board.boardContents || ""} onChange={inputUpdate}/>
            <input type="submit" value="save" onClick={boardSave}/>
        </form>
      </>
    )
  }
  
  export default Save