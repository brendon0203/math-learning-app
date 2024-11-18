import React from 'react';
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

function App() {
  const handleTopicClick = (topic) => {
    alert(`You selected: ${topic}`);
    // In the future, this could navigate to a specific page or show more content.
  };

  const renderTopics = (topics) => (
    topics.map((topic, index) => (
      <button key={index} onClick={() => handleTopicClick(topic)} className="topic-button">
        {topic}
      </button>
    ))
  );

  return (
    <div className="App">
      <h1>Math Learning App</h1>

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
    </div>
  );
}

export default App;
