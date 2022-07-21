import { combineReducers } from "redux";

import { filtersReducer } from "./FiltersSlice";
import { todoReducer } from "./TodoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };

//combineReducers tự động match các action.type từ các SliceReducer
const rootReducer = combineReducers({
  filters: filtersReducer.reducer,
  todoList: todoReducer.reducer,
});

export default rootReducer;
