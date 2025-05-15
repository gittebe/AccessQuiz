import "./Result.css";

export const Result = ({ score, total, text }) => (
  <div className="result">
    <h2>Results</h2>
    <p>You have {score} questions  out of {total} correct.</p>
    <p>{text}</p>
  </div>
);