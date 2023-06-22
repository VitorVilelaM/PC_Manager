import React from "react";
import { Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend
)

function PieChart({data, title}) {

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.reload(); // Atualiza a página
    }, 20000); // 20 segundos em milissegundos

    return () => {
      clearTimeout(timeoutId); // Limpa o timeout se o componente for desmontado
    };
  }, []);

  const options = {}

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}
export default PieChart;