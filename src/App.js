import React, { useState } from 'react';
import './App.css';
import { arithmeticTopics } from './modules/Arithmetic';
import { algebraTopics } from './modules/Algebra';
import { geometryTopics } from './modules/Geometry';
import { fractionsDecimalsTopics } from './modules/FractionsDecimals';
import { numberTheoryTopics } from './modules/NumberTheory';
import { trigonometryTopics } from './modules/Trigonometry';
import { probabilityStatisticsTopics } from './modules/ProbabilityStatistics';
import { measurementTopics } from './modules/Measurement';
import { wordProblemsTopics } from './modules/WordProblems';
import Quiz from './components/Quiz';
import GraphComponent from './components/GraphComponent';
import ExplanationComponent from './components/ExplanationComponent';
import StepByStepComponent from './components/StepByStepComponent';

function App() {
  // State to track selected topic
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedGraph, setSelectedGraph] = useState(null);

  // Function to save user progress in localStorage
  const saveProgress = (topic) => {
    let progress = JSON.parse(localStorage.getItem('userProgress')) || {};
    progress[topic] = true; // Mark topic as completed
    localStorage.setItem('userProgress', JSON.stringify(progress));
  };

  // Function to get user progress from localStorage
  const getProgress = () => {
    return JSON.parse(localStorage.getItem('userProgress')) || {};
  };

  const handleTopicClick = (topic) => {
    saveProgress(topic); // Save that the user clicked on the topic
    setSelectedTopic(topic); // Set the current topic
  };

  const renderTopics = (topics) => {
    const progress = getProgress();

    return topics.map((topic, index) => (
      <button
        key={index}
        onClick={() => handleTopicClick(topic)}
        className={`topic-button ${progress[topic] ? 'completed' : ''}`}
      >
        {topic}
      </button>
    ));
  };

  // Sample questions for demonstration
  const sampleQuestions = [
    { text: "What is 2 + 2?", type: "multipleChoice", options: ["3", "4", "5"], correct: "4" },
    { text: "What is 5 * 6?", type: "multipleChoice", options: ["30", "25", "20"], correct: "30" }
  ];

  const renderGraph = () => {
    if (selectedTopic === 'Linear Functions') {
      // Example data for y = 2x + 1
      const data = {
        xValues: [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10],
        yValues: [-19, -15, -11, -7, -3, 1, 5, 9, 13, 17, 21]
      };
      return <GraphComponent equation="y = 2x + 1" data={data} />;
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Math Learning App</h1>
      {selectedTopic ? (
        <>
          <button onClick={() => setSelectedTopic(null)} className="back-button">
            Back
          </button>
          <ExplanationComponent topic={selectedTopic} />
          {renderGraph()}
          <StepByStepComponent topic={selectedTopic} />
          <Quiz questions={sampleQuestions} />
        </>
      ) : (
        <>
          <h2>Arithmetic</h2>
          <div className="topic-list">{renderTopics(arithmeticTopics)}</div>

          <h2>Algebra</h2>
          <div className="topic-list">{renderTopics(algebraTopics)}</div>

          <h2>Geometry</h2>
          <div className="topic-list">{renderTopics(geometryTopics)}</div>

          <h2>Fractions and Decimals</h2>
          <div className="topic-list">{renderTopics(fractionsDecimalsTopics)}</div>

          <h2>Number Theory</h2>
          <div className="topic-list">{renderTopics(numberTheoryTopics)}</div>

          <h2>Trigonometry</h2>
          <div className="topic-list">{renderTopics(trigonometryTopics)}</div>

          <h2>Probability and Statistics</h2>
          <div className="topic-list">{renderTopics(probabilityStatisticsTopics)}</div>

          <h2>Measurement</h2>
          <div className="topic-list">{renderTopics(measurementTopics)}</div>

          <h2>Word Problems</h2>
          <div className="topic-list">{renderTopics(wordProblemsTopics)}</div>
        </>
      )}
    </div>
  );
}

export default App;
