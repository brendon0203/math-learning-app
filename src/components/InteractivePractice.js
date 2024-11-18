import React, { useState } from 'react';

const InteractivePractice = ({ question, correctAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (userAnswer.trim() === correctAnswer.toString()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      <input
        type="text"
        value={userAnswer}
        onChange={handleInputChange}
        placeholder="Enter your answer"
      />
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
      {feedback && <p>{feedback}</p>}
    </div>
  );
};

export default InteractivePractice;
