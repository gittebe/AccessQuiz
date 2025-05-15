import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Result } from "../../components/Result/Result";
import { Header } from "../../components/Header/Header";
import "./ResultPage.css";

export const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || {};

  const headerText = "AccessQuiz";

  if (score === undefined || total === undefined) {
    return (
      <div className="result-wrapper">
        <Header header={headerText} />
        <Result score={0} total={0} text={paragraphText}/>
        <p>No results found.</p>
        <Link to="/quiz" className="link">Go back to quiz</Link>
      </div>
    );
  }

  let paragraphText = "";
  const percentage = (score / total) * 100;
  if (percentage === 100) {
    paragraphText = "Perfect score! Outstanding job!";
  } else if (percentage >= 80) {
    paragraphText = "Great work! You did really well.";
  } else if (percentage >= 50) {
    paragraphText = "Not bad! There's room to improve.";
  } else {
    paragraphText = "Don't worry, try again and you'll improve!";
  }

  return (
    <div className="result-wrapper">
      <Header header={headerText}  />
      <Result score={score} total={total} text={paragraphText}/>
      <Link to="/quiz" className="link">Try again</Link>
    </div>
  )
};