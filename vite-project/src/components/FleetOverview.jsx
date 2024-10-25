import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FleetOverview = () => {
  const data = {
    labels: ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4"],
    datasets: [
      {
        label: "Battery Percentage",
        data: [80, 50, 30, 60],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Fleet Overview - Battery Percentage",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default FleetOverview;
