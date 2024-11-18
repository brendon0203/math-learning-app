import React from 'react';
import { Line } from 'react-chartjs-2';

const GraphComponent = ({ equation, data }) => {
  const graphData = {
    labels: data.xValues,
    datasets: [
      {
        label: 'Graph',
        data: data.yValues,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-Axis'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y-Axis'
        }
      }
    }
  };

  return (
    <div>
      <h3>{equation}</h3>
      <Line data={graphData} options={options} />
    </div>
  );
};

export default GraphComponent;
