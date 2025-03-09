import React from "react";
import TaskChart from "./TaskChart";
import "../App.css";

const Sidebar = ({ tasksCount, completedCount }) => {
  const handleLogout = () => {
    localStorage.clear();
    console.log("Local storage cleared!");
    location.reload()
  };
  return (
    <div className="sidebar px-4">
      <h4>Profile</h4>
      <div className="profile">
        <img
          src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid"
          alt="Profile"
          width={150}
          style={{ borderRadius: "50%" }}
        />
        <p>Hey, ABCD</p>
      </div>
      <ul>
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Planned</li>
        <li>Assigned to me</li>
      </ul>
      <div className="chart-container">
        <h3>Today Tasks</h3>

        <TaskChart tasksCount={tasksCount} completedCount={completedCount} />
      </div>
      <input type="submit" value={"Reset"} className="btn btn-warning w-100 my-4" onClick={handleLogout} />
    </div>
  );
};

export default Sidebar;
