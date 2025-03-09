import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

function App() {
  // Load tasks and completedTasks from localStorage
  const getStoredTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, text: "Buy groceries", completed: false, important: false },
      {
        id: 2,
        text: "Finish project report",
        completed: false,
        important: true,
      },
      { id: 3, text: "Call the bank", completed: false, important: false },
      {
        id: 4,
        text: "Schedule dentist appointment",
        completed: false,
        important: false,
      },
      { id: 5, text: "Plan weekend trip", completed: false, important: false },
    ];
    // console.log(storedTasks)
    return storedTasks;
  };
  // console.log(getStoredTasks())

  const getStoredCompletedTasks = () => {
    const storedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks")
    ) || [
      { id: 6, text: "Read a book", completed: true },
      { id: 7, text: "Clean the house", completed: true },
      { id: 8, text: "Prepare presentation", completed: true },
      { id: 9, text: "Update blog", completed: true },
    ];
    return storedCompletedTasks;
  };

  const [tasks, setTasks] = useState(getStoredTasks());
  const [completedTasks, setCompletedTasks] = useState(
    getStoredCompletedTasks()
  );
  const [newTaskText, setNewTaskText] = useState("");

  // Update localStorage whenever tasks or completedTasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText,
        completed: false,
        important: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    const completedTask = tasks.find((task) => task.id === id);

    if (completedTask) {
      completedTask.completed = true;
      setCompletedTasks([...completedTasks, completedTask]);
    }

    setTasks(updatedTasks);
  };

  const toggleRepeat = (id) => {
    const updatedCompletedTasks = completedTasks.filter(
      (task) => task.id !== id
    );
    const repeatedTask = completedTasks.find((task) => task.id === id);

    if (repeatedTask) {
      repeatedTask.completed = false;
      setTasks([...tasks, repeatedTask]);
    }

    setCompletedTasks(updatedCompletedTasks);
  };

  const toggleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleImportant = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
    
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("Checkbox is", !isChecked ? "Checked" : "Unchecked");
  };

  return (
    <>
      <Navbar />
      <section className="app w-100">
        <Sidebar
          tasksCount={tasks.length}
          completedCount={completedTasks.length}
        />

        <div style={{ fontFamily: "Arial", padding: "20px", width: "80%" }}>
          <h1>To-Do List</h1>
          <div className="input-group mb-3">
            <input
            className="form-control fw-bolder" 
              type="text"
              placeholder="Add a task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <button 
            className="input-group-text btn btn-primary fw-bolder"
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
          <ul className="list-group">
            {tasks.length === 0 ? (
              <p>ALL TASKS COMPLETED</p>
            ) : (
              tasks.map((task) => (
                <li onClick={isChecked}
                  className="list-group-item w-4 d-flex justify-content-between align-items-center"
                  key={task.id}
                  style={{ marginBottom: "10px" }}
                >
                  <div>
                    <input type="checkbox" className="fw-bolder" />
                    <span style={{ marginLeft: "10px" }} className="fw-bolder">{task.text}</span>
                  </div>
                  <div>
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
                      value="Done"
                      className="btn btn-success"
                      onClick={() => toggleComplete(task.id)}
                      style={{ marginLeft: "10px" }}
                    />

                    <input
                      type="submit"
                      value="Delete"
                      className="btn btn-danger"
                      onClick={() => toggleDelete(task.id)}
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                </li>
              ))
            )}
          </ul>

          <h2>Completed</h2>
          <ul className="list-group">
            {completedTasks.length === 0 ? (
              <p>Do it Fast So Much work!</p>
            ) : (
              completedTasks.map((task) => (
                <li className="list-group-item d-flex justify-content-between align-items-center"
                  key={task.id}
                  style={{ marginBlock: "10px" }}
                >
                  <div><input type="checkbox" defaultChecked />
                  <span style={{ marginBottom: "10px", marginLeft: "10px", fontWeight:"bolder" }}>
                    {task.text}
                  </span></div>
                  <div>
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
                    className="btn btn-primary"
                    value={"Repeat"}
                    onClick={() => toggleRepeat(task.id)}
                    style={{ marginLeft: "10px" }}
                  />
                 </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
