import { useEffect, useState } from "react";
import quizData from "../../../quizData.json";
import "./QuizCard.css";

export const QuizCard = ({ category, onFinish }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    setQuestions(quizData[category]);
  }, [category]);

  const handleAnswer = (questionIndex, selectedIndex) => {
    if (answers[questionIndex] !== undefined) return;

    const correct = questions[questionIndex].answer === selectedIndex;
    const explanation = questions[questionIndex].explanation;

    setAnswers((prev) => ({ ...prev, [questionIndex]: selectedIndex }));
    setFeedback((prev) => ({
      ...prev,
      [questionIndex]: {
        correct,
        explanation
      }
    }));
  };

  const handleSubmit = () => {
    const correctCount = questions.reduce((count, q, i) => {
      return count + (answers[i] === q.answer ? 1 : 0);
    }, 0);
    onFinish(correctCount, questions.length);
  };

  if (!questions.length) return <p>Loading...</p>;

  return (
    <div className="quiz-container">
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <h3>{q.question}</h3>
          <ul>
            {q.options.map((option, idx) => {
              const isSelected = answers[qIndex] === idx;
              return (
                <li key={idx}>
                  <button
                    onClick={() => handleAnswer(qIndex, idx)}
                    disabled={answers[qIndex] !== undefined}
                    className={`answer-button ${feedback[qIndex]
                        ? idx === answers[qIndex]
                          ? feedback[qIndex].correct
                            ? "correct"
                            : "incorrect"
                          : ""
                        : isSelected
                          ? "selected"
                          : ""
                      }`}
                  >
                    {feedback[qIndex] && idx === answers[qIndex] ? (
                      feedback[qIndex].correct ? `✅ ${option}` : `❌ ${option}`
                    ) : (
                      option
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {feedback[qIndex] && (
            <p className={feedback[qIndex].correct ? "correct" : "incorrect"}>
              {feedback[qIndex].correct ? "Correct. " : "Incorrect. "}
              {feedback[qIndex].explanation}
            </p>
          )}
        </div>
      ))}

      {Object.keys(answers).length === questions.length && (
        <button className="submit-button" onClick={handleSubmit}>
          Quiz abschließen
        </button>
      )}
    </div>
  );
};