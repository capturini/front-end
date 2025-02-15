"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function DisplayGrowth() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Display Growth Over Time",
      },
    },
  }

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

  const data = {
    labels,
    datasets: [
      {
        label: "Display Coverage",
        data: [65, 70, 75, 78, 82, 85],
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Target",
        data: [70, 72, 75, 77, 80, 85],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return <Line options={options} data={data} height={350} />
} 