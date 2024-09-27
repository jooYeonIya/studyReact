import { useState } from "react"

export default function TodoEditor({onCreate}) {
    let [content, setContent] = useState("");
    let changeContent = (e) => {
        setContent(e.target.value);
    }
    
    let submit = () => {
        onCreate(content);
    }

    return (
        <>
            <h4>새로운 Todo 작성하기</h4>
            <input type="text" placeholder="새로운 Todo..." value={content} onChange={changeContent}/>
            <button onClick={submit}>추가</button>
        </>
    )
}