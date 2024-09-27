import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todo, deleteTodo}) {
    let [search, setSearch] = useState("")
    let changeSearch = (e) => {
        setSearch(e.target.value);
    }

    let getSearchResult = () => {
        return search === "" 
        ? todo
        : todo.filter((it) => it.content.includes(search))

    }
    return (
        <>
            <h4>Todo List</h4>
            <input type="text" placeholder="검색어를 입력하세요" value={search} onChange={changeSearch}/>
            <br />
            {getSearchResult().map ((it) => <div><TodoItem key={it.id} it={it} deleteTodo={deleteTodo}/></div>)}
        </>
    )
}