import React from "react";
import { Pie } from "react-chartjs-2";
import './Pie.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend
)

function PieChart({data, title}) {

  const options = {}

  return (
    <div className="chart-container">
      <p>{title}</p>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}
export default PieChart;