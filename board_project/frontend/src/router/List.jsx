import { useEffect, useState } from "react"
import axios from 'axios'

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/board/list")
      .then((res) => {
        console.log(res.data)
        setList(res.data)
      })
  }, [])

  return (
    <>
      <h1>list</h1>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {list.map((board) =>
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>{board.boardTitle}</td>
              <td>{board.boardContents}</td>
              <td>{board.boardWirter}</td>
              <td>{board.boardHits}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default List