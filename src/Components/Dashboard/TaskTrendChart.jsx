import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TaskTrendChart({ tasks }) {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const taskCounts = tasks.reduce((counts, task) => {
      const date = task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'Unknown Date';
      counts[date] = (counts[date] || 0) + 1;
      return counts;
    }, {});

    const labels = Object.keys(taskCounts);
    const data = Object.values(taskCounts);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Tasks Per Day',
          data,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
      ],
    });
  }, [tasks]);

  return (
    <div className="chart-container">
      <h3>Task Trend</h3>
      <Line data={chartData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
    </div>
  );
}
