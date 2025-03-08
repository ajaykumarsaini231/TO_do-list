import React from "react";
import Sidebar from "./components/Sidebar";
// import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
     

      {/* Main Content */}
      <main className="main-content">
     
        <TaskList />
      </main>
    </div>
  );
}

export default App;
