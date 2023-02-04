import uniqid from "uniqid";
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

const todoReducer = (state = initialState, action) => {
  const date = `${
    new Date().getDate() / 10 < 1 ? 0 : ""
  }${new Date().getDate()}:${(new Date().getMonth() + 1) / 10 < 1 ? 0 : ""}${
    new Date().getMonth() + 1
  }:${new Date().getFullYear()} - ${
    new Date().getHours() / 10 < 1 ? 0 : ""
  }${new Date().getHours()}:${
    new Date().getMinutes() / 10 < 1 ? 0 : ""
  }${new Date().getMinutes()}`;
  console.log(date);
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = [
        {
          id: uniqid(),
          text: action.payload,
          date: date,
          complited: false,
        },
        ...state,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    case "DELETE_TODO":
      const deletedTodos = [
        ...state.filter((todo) => todo.id != action.payload),
      ];
      localStorage.setItem("todos", JSON.stringify(deletedTodos));
      return deletedTodos;
    case "COMPLITED_TODO":
      let checkComplited = state.find(
        (todo) => todo.id == action.payload
      ).complited;
      if (checkComplited) {
        const newTodos = [
          {
            id: uniqid(),
            text: state.find((todo) => todo.id == action.payload).text,
            date: date,
            complited: !state.find((todo) => todo.id == action.payload)
              .complited,
          },
          ...state.filter((todo) => todo.id != action.payload),
        ];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      } else {
        const newTodos = [
          ...state.filter((todo) => todo.id != action.payload),
          {
            id: uniqid(),
            text: state.find((todo) => todo.id == action.payload).text,
            date: state.find((todo) => todo.id == action.payload).date,
            complited: !state.find((todo) => todo.id == action.payload)
              .complited,
          },
        ];
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
      }
    default:
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
  }
};

export default todoReducer;
