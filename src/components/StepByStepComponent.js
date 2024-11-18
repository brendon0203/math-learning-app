import React from 'react';

const StepByStepComponent = ({ topic }) => {
  const steps = {
    'Linear Functions': [
      'Step 1: Identify the slope (m) and y-intercept (b) from the equation y = mx + b.',
      'Step 2: Plot the y-intercept on the graph (where x = 0).',
      'Step 3: Use the slope to find another point on the line. For example, if m = 2, go up 2 units and over 1 unit.',
      'Step 4: Draw a straight line through the points.'
    ],
    'Quadratic Functions': [
      'Step 1: Write the equation in standard form: y = ax^2 + bx + c.',
      'Step 2: Determine the direction of the parabola (up or down) based on the sign of a.',
      'Step 3: Find the vertex by using the formula x = -b / (2a).',
      'Step 4: Plot the vertex and a few additional points, then draw the parabola.'
    ]
  };

  return (
    <div>
      <h3>Step-by-Step Solution: {topic}</h3>
      <ol>
        {steps[topic]?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default StepByStepComponent;
