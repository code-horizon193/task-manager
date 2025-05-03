import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
} from "chart.js";
ChartJS.register(PointElement, LineElement, LinearScale, CategoryScale);

const LineChart = ({ vdata, mlabel }) => {
    const data = {
        labels: vdata.map((data) => data.year),
        datasets: [
            {
                label: mlabel,
                data: vdata.map((data) => data.projects),
                fill: false,
                borderColor: "#4bc0c0",
                tension: 0.3,
                pointBackgroundColor: "#4bc0c0"
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: false,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                display:false ,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div className='p-2'>
            <h3 className='text-gray-600 dark:text-slate-200 font-ubuntu text-lg font-semibold'>
                Company Projects Timeline :
            </h3>
            <div className="h-72 lg:h-80 mt-3">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default LineChart;