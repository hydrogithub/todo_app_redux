// const initialState = [
//   { id: 0, name: "Learn Redux", completed: true, priority: "High" },
//   {
//     id: 1,
//     name: "Learn Redux-toolkit",
//     completed: false,
//     priority: "Medium",
//   },
//   { id: 2, name: "Learn Redux-persist", completed: false, priority: "Low" },
//   { id: 3, name: "Learn ABC", completed: false, priority: "Low" },
//   { id: 4, name: "Learn XYZ", completed: false, priority: "Low" },
// ];

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoList":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
};

export default todoReducer;
