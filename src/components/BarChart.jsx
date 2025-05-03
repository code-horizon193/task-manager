import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);



const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: false,
            border: {
                display: false,
            },
            grid: {
                color: "#62748e56"
            }
        },
    },
    plugins: {
        legend: {
            display: true,
        },
    },
};

const BarChart = ({visualData ,label1 ,label2 ,labels}) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: label1,
                data: visualData[0],
                backgroundColor: "#E50046",
                borderRadius: 3,
            },
            {
                label: label2,
                data: visualData[1],
                backgroundColor: "#3d5ee1",
                borderRadius: 3,
            },
        ],
    };
    return (
        <div className="p-4 w-full">
            <div className="h-72 lg:h-80">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;