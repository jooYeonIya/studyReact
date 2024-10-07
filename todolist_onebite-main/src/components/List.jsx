import "./List.css";
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const { totalCount, isDoneCount, notDoneCount } = useMemo (
    () => {
      const totalCount = todos.length;
      // const isDoneCount = todos.filter(todo => todo.isDone ).length;
      const isDoneCount = todos.filter(todo => { return todo.isDone }).length;
      const notDoneCount = totalCount - isDoneCount;
      return {
        totalCount,
        isDoneCount,
        notDoneCount
      }
    }, [todos]);


  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>{totalCount}</div>
        <div>{isDoneCount}</div>
        <div>{notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
