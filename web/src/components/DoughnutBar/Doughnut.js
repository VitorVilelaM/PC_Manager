import React from 'react';
import './Doughnut.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutBar({data, title}) {
  return (
    <div className='container'> 
      <p>{title}</p>
      <Doughnut data={data} />
    </div>
  );
}
