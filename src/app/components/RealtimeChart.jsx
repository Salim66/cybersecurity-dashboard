'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function RealtimeChart() {
    const data = {
        labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'],
        datasets: [
            {
                label: 'Intrusion Attempts',
                data: [2, 6, 3, 8, 5, 7, 4],
                fill: false,
                borderColor: '#3b82f6',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Realtime Intrusion Attempts</h2>
            <Line data={data} options={options} />
        </div>
    );
}
