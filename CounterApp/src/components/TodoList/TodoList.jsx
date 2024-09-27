import TodoItem from "./TodoItem";

export default function TodoList({todo}) {
    return (
        <>
            <h4>Todo List</h4>
            <input type="text" placeholder="검색어를 입력하세요" />
            <br />
            {todo.map ((it) => <div><TodoItem it={it}/></div>)}
        </>
    )
}