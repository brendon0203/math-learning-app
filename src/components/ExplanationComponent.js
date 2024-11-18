import React from 'react';

const ExplanationComponent = ({ topic }) => {
  const explanations = {
    'Linear Functions': 'A linear function has the form y = mx + b, where m is the slope and b is the y-intercept. It represents a straight line.',
    'Quadratic Functions': 'A quadratic function has the form y = ax^2 + bx + c. The graph is a parabola, which may open upwards or downwards depending on the value of a.'
  };

  return (
    <div>
      <h3>{topic}</h3>
      <p>{explanations[topic]}</p>
    </div>
  );
};

export default ExplanationComponent;
