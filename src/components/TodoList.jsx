import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = () => {
    if (input.trim() === "") {
      alert("You must write a task!");
      return;
    }

    if (editingIndex !== null) {
      
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = input;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      
      setTasks([...tasks, input]);
    }

    setInput("");
  };

  
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  
  const editTask = (index) => {
    setInput(tasks[index]);
    setEditingIndex(index);
  };

  return (
    <div className="todo">
      <h2>Task Management</h2>
      <div className="row">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add or Edit Task"
        />
        <button onClick={addTask}>{editingIndex !== null ? "Edit" : "Add"}</button>
      </div>
      <ul id="list-container">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div>
              <button
                onClick={() => editTask(index)}
                style={{
                  marginRight: "10px",
                  padding: "5px 10px",
                  background: "blue",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  padding: "5px 10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
