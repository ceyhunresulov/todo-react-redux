import React from "react";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { complitedTodo, deleteTodo } from "../actions";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  const doneTodo = () => {
    dispatch(complitedTodo(todo.id));
  };
  return (
    <li className={todo.complited ? "todo-item-complited" : "todo-item"}>
      <span className="todo-date">{todo.date}</span>
      <p className="todo-note">{todo.text}</p>
      <div className="delete-box">
        <IoCheckmarkDoneCircle className="done" onClick={doneTodo} />
        <MdDelete className="delete" onClick={removeTodo} />
      </div>
    </li>
  );
}

export default TodoItem;
