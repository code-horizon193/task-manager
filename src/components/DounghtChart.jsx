import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ vdata }) => {
  const data = {
    labels: vdata[0],
    datasets: [
      {
        data: vdata[1],
        backgroundColor: vdata[2],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '65%',
    rotation: -100,
    circumference: 200,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
          boxWidth: 20,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='p-2'>
      <h3 className='text-gray-600 dark:text-slate-200 font-ubuntu text-lg font-semibold'>
        Priority Analysis:
      </h3>
      <div className='h-72 lg:h-80 mt-3'>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
