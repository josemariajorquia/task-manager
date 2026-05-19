import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./feature/taskSlice";
import "./index.css";

function App() {

  const [input, setInput] = useState("");

  const tasks = useSelector(function(state) {
    return state.tasks.tasks;
  });

  const dispatch = useDispatch();

  function handleAdd() {
    if (input.trim() === "") {
      return;
    }
    dispatch(addTask(input));
    setInput("");
  }

  function handleRemove(index) {
    dispatch(removeTask(index));
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div className="container">

      <div className="card">

        <div className="header">
          <h1 className="title">📝 Task Manager</h1>
          <p className="subtitle">Track your tasks efficiently</p>
        </div>

        <div className="input-section">
          <input
            className="input"
            type="text"
            placeholder="What needs to be done?"
            value={input}
            onChange={function(e) { setInput(e.target.value); }}
            onKeyDown={handleKeyPress}
          />
          <button className="btn" onClick={handleAdd}>
            + Add Task
          </button>
        </div>

        <div className="divider"></div>

        <div className="list-header">
          <span className="list-title">My Tasks</span>
          <span className="task-badge">{tasks.length}</span>
        </div>

        {tasks.length === 0 && (
          <div className="empty-box">
            <span className="empty-icon">📋</span>
            <p className="empty-title">No tasks yet</p>
          </div>
        )}

        {tasks.length > 0 && (
          <div className="task-list">
            {tasks.map(function(task, index) {
              return (
                <div className="task-item" key={index}>

                  <div className="task-left">
                    <div className="task-dot"></div>
                    <span className="task-text">{task}</span>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={function() { handleRemove(index); }}
                  >
                    ✕
                  </button>

                </div>
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}

export default App;