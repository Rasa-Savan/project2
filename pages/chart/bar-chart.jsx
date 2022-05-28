import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "chart.js/auto";

function BarChart() {
  return (
    <div className="w-full">
      <Line
        data={{
          labels: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"],
          datasets: [
            {
              label: "Fully Rounded",
              data: [20, 40, 30, 59, 55, 34, 85, 96],
              borderColor: "rgb(255, 136, 68)",
              backgroundColor: "rgba(255, 136, 68, 0.5)",
              borderWidth: 2,
              //   borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
            },
            {
              label: "Small Radius",
              data: [55, 34, 85, 96, 20, 40, 30, 59],
              borderColor: "rgb(246, 68, 255)",
              backgroundColor: "rgba(246, 68, 255, 0.5)",
              borderWidth: 2,
              borderRadius: 20,
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
              text: "Chart.js Bar Chart",
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
