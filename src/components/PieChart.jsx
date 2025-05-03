import React from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = ({ visualData ,mainLabel }) => {
    const data = {
        labels: visualData[0],
        datasets: [
            {
                label: mainLabel,
                data: visualData[1],
                borderWidth: 1,
                backgroundColor: visualData[2],
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,

    }
    return (
        <div className="p-4 w-full">
            <div className="h-72 lg:h-80">
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}

export default PieChart;