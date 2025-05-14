import "./Result.css";

export const Result = ({ score, total }) => (
  <div className="result">
    <h3>Results</h3>
    <p>You have {score} questions  out of {total} correct.</p>
  </div>
);