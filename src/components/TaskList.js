import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
// import './App.css'
// import Header from "./Header";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false, important: false },
    { id: 2, text: "Finish project report", completed: false, important: true },
    { id: 3, text: "Call the bank", completed: false, important: false },
    {
      id: 4,
      text: "Schedule dentist appointment",
      completed: false,
      important: false,
    },
    { id: 5, text: "Plan weekend trip", completed: false, important: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState([
    { id: 6, text: "Read a book", completed: true },
    { id: 7, text: "Clean the house", completed: true },
    { id: 8, text: "Prepare presentation", completed: true },
    { id: 9, text: "Update blog", completed: true },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    if (newTaskText.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTaskText,
          completed: false,
          important: false,
        },
      ]);
      setNewTaskText("");
    }
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const completedTask = updatedTasks.find(
      (task) => task.id === id && task.completed
    );

    setTasks(updatedTasks.filter((task) => task.id !== id));
    if (completedTask) {
      setCompletedTasks([...completedTasks, completedTask]);
    }
  };

  const toggleRepeat = (id) => {
    const updatedCompletedTasks = completedTasks.map((task) =>
      task.id === id ? { ...task, completed: false } : task
    );

    const repeatedTask = updatedCompletedTasks.find(
      (task) => task.id === id && !task.completed
    );

    setCompletedTasks(updatedCompletedTasks.filter((task) => task.id !== id));

    if (repeatedTask) {
      setTasks([...tasks, repeatedTask]);
    }
  };
  const toggleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleImportant = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, important: !task.important } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
    <Navbar/>
      <section className="app">
        <Sidebar
          tasksCount={tasks.length}
          completedCount={completedTasks.length}
        />

        <div style={{ fontFamily: "Arial", padding: "20px" }}>
          <h1>To-Do List</h1>
          <div>
            <input
              type="text"
              placeholder="Add a task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button
              onClick={addTask}
              style={{
                marginLeft: "10px",
                padding: "5px 15px",
              }}
            >
              Add Task
            </button>
          </div>

          <h2>Today</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} style={{ marginBottom: "10px" }}>
                <input type="checkbox" />
                <span style={{ marginLeft: "10px" }}>{task.text}</span>
                <button
                  onClick={() => toggleImportant(task.id)}
                  style={{
                    marginLeft: "10px",
                    color: task.important ? "gold" : "black",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "20px",
                    border: "none",
                    borderRadius: "2px",
                  }}
                >
                  ★
                </button>

                <input
                  type="submit"
                  // onClick={task.completed}
                  onClick={() => toggleComplete(task.id)}
                  value={"Done"}
                  style={{ marginLeft: "10px" }}
                />

                <input
                  type="submit"
                  value="Delete"
                  onClick={() => toggleDelete(task.id)}
                  style={{ marginLeft: "10px" }}
                />
              </li>
            ))}
          </ul>

          <h2>Completed</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id} style={{ marginBlock: "20px", marginLeft: "10px" }} >
                <input type="checkbox" defaultChecked  />
                <span style={{ marginBottom: "10px", marginLeft: "10px" }} >{task.text}</span>
                <input
                  type="submit"
                  value={"Repeat"}
                  // checked={task.completed}
                  onClick={() => toggleRepeat(task.id)}
                  style={{ marginLeft: "10px" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* <Header></Header> */}
    </>
  );
}

export default App;
