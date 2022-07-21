import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, statusFilterChange, toggleTodoList } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todoRemainingSelector } from "../redux/selectors";
import Filter from "./Filter";

const statusList = [
  { name: "ALL", display: "Tất cả" },
  { name: "Completed", display: "Đã hoàn thành" },
  { name: "Todo", display: "Chưa hoàn thành" },
];

const Layout = () => {
  const [newTask, setNewTask] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const todoList = useSelector(todoRemainingSelector);

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: newTask,
        completed: false,
        priority: priority,
      })
    );
    setNewTask("");
    setPriority("Medium");
  };

  const toggleTodo = (id) => {
    dispatch(toggleTodoList(id));
  };
  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <h1>TODO APP DEMO</h1>
          <form>
            <Filter />

            <div className="form__field status_group">
              <label>Lọc theo trạng thái</label>
              <div className="status_content">
                {statusList.map((item, index) => (
                  <div className="status" key={index}>
                    <input
                      type="radio"
                      name="status"
                      id={item.name}
                      value={item.name}
                      checked={item.name === filterStatus}
                      onChange={(e) => {
                        setFilterStatus(e.target.value);
                        dispatch(statusFilterChange(e.target.value));
                      }}
                    />
                    <label htmlFor={item.name}>{item.display}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="list__task">
              {todoList.length === 0 ? (
                <h3 className="text-center">Không có công việc nào</h3>
              ) : (
                todoList.map((item) => (
                  <div className="task" key={item.id}>
                    <div className="content">
                      <input
                        type="checkbox"
                        id={item.id}
                        defaultChecked={item.completed}
                        onClick={() => toggleTodo(item.id)}
                      />
                      <label
                        className={item.completed ? "strike" : ""}
                        htmlFor={item.id}
                      >
                        {item.name}
                      </label>
                    </div>
                    <div className={"priority priority--" + item.priority}>
                      {item.priority}
                    </div>
                  </div>
                ))
              )}
            </div>
          </form>
        </div>
        <div className="bottom">
          <div className="form__field search_group">
            <div className="search">
              <label htmlFor="task">Thêm công việc</label>
              <input
                type="text"
                name="search"
                id="task"
                placeholder="Công việc muốn thêm..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <select
                className={
                  priority === "High"
                    ? "select__priority priority--High"
                    : priority === "Medium"
                    ? "select__priority priority--Medium"
                    : "select__priority priority--Low"
                }
                name="selectPriority"
                id="selectPriority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div className="btn" onClick={handleSubmit}>
              Thêm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
