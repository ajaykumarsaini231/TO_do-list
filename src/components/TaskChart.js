import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import "bootstrap/dist/css/bootstrap.min.css";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = ({ tasksCount, completedCount }) => {
  const chartData = {
    datasets: [
      {
        data: [tasksCount, completedCount],
        backgroundColor: ["#4CAF50", "#8BC34A"],
        hoverBackgroundColor: ["#45A049", "#7CB342"],
      },
    ],
    labels: ["Pending", "Done"],
    

  };
  
  return (
    <div style={{ width: "300px", }}>
      <h5>Total : {tasksCount + completedCount}</h5>

      < Doughnut style={{marginLeft: "-10px" }} data={chartData} />
    </div>
  );
};

export default TaskChart;
