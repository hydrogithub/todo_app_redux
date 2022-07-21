// const initialState = {
//   search: "",
//   status: "ALL",
//   priority: [],
// };

// const filtersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export const filtersReducer = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "ALL",
    priority: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
  },
});
