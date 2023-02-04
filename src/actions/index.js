export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload: payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};

export const complitedTodo = (payload) => {
  return {
    type: "COMPLITED_TODO",
    payload,
  };
};

export const filterAllTodo = () => {
  return {
    type: "FİLTER_ALL",
  };
};

export const filterComplitedTodo = () => {
  return {
    type: "FİLTER_COMPLİTED",
  };
};

export const filterİncomplitedTodo = () => {
  return {
    type: "FİLTER_İNCOMPLİTED",
  };
};
