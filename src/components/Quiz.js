import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    if (answer === currentQuestion.correct) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect! Try again.");
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setUserAnswer(null);
    setFeedback("");
  };

  return (
    <div>
      <h3>{currentQuestion.text}</h3>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={userAnswer !== null}
            className="quiz-button"
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
      {userAnswer !== null && currentQuestionIndex < questions.length - 1 && (
        <button onClick={handleNextQuestion} className="next-button">
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
