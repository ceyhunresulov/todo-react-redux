import { createStore, combineReducers } from "redux";
import filterTodoReducer from "../reducers/filteredTodoReducer";
import todoReducer from "../reducers/todoReducer";

const rootReducer = combineReducers({
  filteredTodo: filterTodoReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);
export default store;
