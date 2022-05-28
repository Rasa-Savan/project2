import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Donough() {
  return (
    <div className="w-96">
      <Doughnut
        data={{
          labels: ["jan", "feb", "mar"],
          datasets: [
            {
              label: "Fully Rounded",
              data: [20, 40, 30],
              borderColor: [
                "rgb(255, 136, 68)",
                "rgb(25, 25, 227)",
                "rgb(227, 25, 106)",
              ],
              backgroundColor: [
                "rgba(255, 136, 68, 0.5)",
                "rgba(25, 25, 227, 0.5)",
                "rgba(227, 25, 106, 0.5)",
              ],
              borderWidth: 2,
              //   borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Doughnut Chart",
            },
          },
        }}
      />
    </div>
  );
}

export default Donough;
