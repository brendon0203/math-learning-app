import React, { useState } from 'react';

const MathLearningApp = () => {
  const [currentTopic, setCurrentTopic] = useState(0);

  const topics = [
    {
      title: "Introduction to Calculus",
      description: "Basic concepts and foundations",
      subtopics: ["What is Calculus?", "Why study Calculus?", "Basic terminology"]
    },
    {
      title: "Pre-Calculus Review",
      description: "Essential concepts you need to know",
      subtopics: ["Functions", "Trigonometry", "Algebra basics"]
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Math Learning App</h1>
      {topics.map((topic, index) => (
        <div 
          key={index}
          style={{ 
            border: '1px solid #ccc',
            padding: '15px',
            margin: '10px 0',
            cursor: 'pointer',
            backgroundColor: currentTopic === index ? '#f0f0f0' : 'white'
          }}
          onClick={() => setCurrentTopic(index)}
        >
          <h2>{topic.title}</h2>
          <p>{topic.description}</p>
          <ul>
            {topic.subtopics.map((subtopic, subIndex) => (
              <li key={subIndex}>{subtopic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MathLearningApp;