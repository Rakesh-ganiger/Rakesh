import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const BatteryAlert = () => {
  const data = {
    labels: ["Healthy", "Low Battery"],
    datasets: [
      {
        label: "Battery Status",
        data: [70, 30], // Dummy data
        backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default BatteryAlert;
