import React from "react";
import TaskChart from "./TaskChart";
import "../App.css";

const Sidebar = ({ tasksCount, completedCount }) => {
 
  return (
    <div >
      <h2>DoIt</h2>
      <div className="profile">
        <img src="https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg?semt=ais_hybrid" alt="Profile"  width={150} style={{ borderRadius: "50%" }}/>
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
              
        <TaskChart tasksCount={tasksCount} completedCount={completedCount}  />

      </div>
    </div>
  );
};

export default Sidebar;
