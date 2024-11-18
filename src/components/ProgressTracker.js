import React from 'react';

const ProgressTracker = ({ topics }) => {
  const progress = JSON.parse(localStorage.getItem('userProgress')) || {};

  const completedTopics = topics.filter(topic => progress[topic]);

  return (
    <div className="progress-tracker">
      <h3>Your Progress</h3>
      <p>{completedTopics.length} out of {topics.length} topics completed.</p>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(completedTopics.length / topics.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressTracker;
