import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const GraphComponent = () => {
  const [slope, setSlope] = useState(1);
  const [intercept, setIntercept] = useState(0);

  // Generate graph data based on slope and intercept
  const generateData = () => {
    const xValues = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];
    const yValues = xValues.map(x => slope * x + intercept);
    return {
      labels: xValues,
      datasets: [
        {
          label: `y = ${slope}x + ${intercept}`,
          data: yValues,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1
        }
      ]
    };
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
      <h3>Interactive Graph</h3>
      <div className="controls">
        <label>
          Slope (m):
          <input
            type="number"
            value={slope}
            onChange={(e) => setSlope(parseFloat(e.target.value))}
          />
        </label>
        <label>
          Intercept (b):
          <input
            type="number"
            value={intercept}
            onChange={(e) => setIntercept(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <Line data={generateData()} options={options} />
    </div>
  );
};

export default GraphComponent;
