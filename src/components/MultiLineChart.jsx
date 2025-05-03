import React from 'react';
import { Line } from "react-chartjs-2";
import { workReport } from '../data';

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
} from "chart.js";
ChartJS.register(PointElement, LineElement, LinearScale, CategoryScale);


const data = {
    labels: [
        '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: [
        {
            label: workReport[0].task,
            data: workReport[0].data,
            borderColor: "#3d5ee1",
            borderWidth: 4,
            tension: 0.4,
            pointRadius: 0,
        },
        {
            label: workReport[1].task,
            data: workReport[1].data,
            borderColor: "#ffc107",
            borderWidth: 4,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0,
        },
        {
            label: workReport[2].task,
            data: workReport[2].data,
            borderColor: "#70C4CF",
            borderWidth: 4,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 0,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            beginAtZero: true,
            grid: {
                display: false,
            },
            border: {
                display: false,
            },
        },
        y: {
            border: {
                display: false,
            },
            grid: {
                color: "#62748e56"
            }
        },
    },
};

const MultiLineChart = () => {
    return (
        <div className='p-2'>
            <h3 className='text-gray-600 dark:text-slate-200 font-ubuntu text-lg font-semibold'>
                Wrok Report
            </h3>
            <div className="h-72 lg:h-96 mt-3">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default MultiLineChart;