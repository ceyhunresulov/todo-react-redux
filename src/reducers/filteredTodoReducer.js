const initialState = "ALL";

const filterTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FİLTER_ALL":
      return "ALL";
    case "FİLTER_COMPLİTED":
      return "COMPLITED";
    case "FİLTER_İNCOMPLİTED":
      return "INCOMPLITED";
    default:
      return state;
  }
};

export default filterTodoReducer;
