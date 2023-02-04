import React from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  filterAllTodo,
  filterComplitedTodo,
  filterİncomplitedTodo,
} from "../actions";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filteredTodo);
  const dispatch = useDispatch();
  console.log(filter);

  const filterTodos = (e) => {
    let value = e.target.value;
    if (value == 1) dispatch(filterAllTodo());
    else if (value == 2) dispatch(filterİncomplitedTodo());
    else if (value == 3) dispatch(filterComplitedTodo());
  };

  return (
    <ul className="todos-box">
      <form action="" className="filtered-box">
        <select className="select-box" onChange={filterTodos}>
          <option value={1}>All</option>
          <option value={2}>Incomplited</option>
          <option value={3}>Complited</option>
        </select>
      </form>
      {(filter === "ALL" &&
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)) ||
        (filter === "COMPLITED" &&
          todos
            .filter((todo) => todo.complited)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />)) ||
        (filter === "INCOMPLITED" &&
          todos
            .filter((todo) => !todo.complited)
            .map((todo) => <TodoItem key={todo.id} todo={todo} />))}
    </ul>
  );
}

export default Todos;
