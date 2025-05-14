import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import "./Home.css";

export const Home = () => {

  const headerText = "AccessQuiz";
  const paragraphText = "Test your accessibility knowledge with these quizzes!";

  return (
    <div className="home-wrapper">
      <Header header={headerText} text={paragraphText}/>
      <div>
        <img src="/assets/accessibility-logo.png" alt="" className="home-logo"/>
      </div>
      <Link to="/quiz" className="link">
        Start Quiz
      </Link>
    </div>
  )
}