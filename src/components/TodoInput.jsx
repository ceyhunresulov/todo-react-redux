import React, { useRef } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions";

function TodoInput() {
  const todos = useSelector((state) => state.filteredTodo);
  const dispatch = useDispatch();
  const todoInput = useRef();
  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoInput.current.value));
    todoInput.current.value = "";
  };
  return (
    <form action="" className="input-box" onSubmit={submitTodo}>
      <input ref={todoInput} type="text" className="input-note" />
      <button type="submit" className="add-btn">
        <AiFillPlusSquare className="add-icon" />
      </button>
    </form>
  );
}

export default TodoInput;
