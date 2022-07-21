import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const statusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  (todoList, status, searchText) =>
    todoList.filter((todo) => {
      if (status === "ALL") {
        return todo.name.toLowerCase().includes(searchText.toLowerCase());
      }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    })
);
