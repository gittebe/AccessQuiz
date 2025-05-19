import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { QuizCard } from "../../components/QuizCard/QuizCard";
import { Result } from "../../components/Result/Result";
import "./Quiz.css";

export const Quiz = () => {
  const [category, setCategory] = useState(null);
  const [result, setResult] = useState(null);
  const [headerText, setHeaderText] = useState("AccessQuiz")
  const [paragraphText, setParagraphText] = useState("You can choose from four categories, each corresponding to one of the four principles of the Web Content Accessibility Guidelines (WCAG): Perceivable, Operable, Understandable, and Robust. Each category contains a set of questions designed to test your knowledge and understanding of accessibility principles and best practices. Once you complete a quiz, you will receive a score that reflects your performance.")

const [backgroundColor, setBackgroundColor] = useState("var(--color-dark-blue");

  const handleCategorySelect = (cat) => {
    setCategory(cat);
    setResult(null);

    switch (cat) {
      case "perceivable":
        setHeaderText("Perceivable");
        setParagraphText("");
         setBackgroundColor("var(--color-light-blue)");
        break;
      case "operable":
        setHeaderText("Operable");
        setParagraphText("");
        setBackgroundColor("var(--color-light-blue)");
        break;
      case "robust":
        setHeaderText("Robust");
        setParagraphText("");
        setBackgroundColor("var(--color-light-blue)");
        break;
      case "understandable":
        setHeaderText("Understandable");
        setParagraphText("");
        setBackgroundColor("var(--color-light-blue)");
        break;
      default:
        setHeaderText("AccessQuiz");
        setParagraphText("");
        setBackgroundColor("var(--color-light-blue)");
    }
  };
const navigate = useNavigate();
  const handleFinish = (score, total) => {
    navigate("/result", {
      state: { score, total },
    })
  };

  console.log(backgroundColor);
  return (
    <div className="quizWrapper">
      <Header 
      header={headerText} 
      text={paragraphText} 
      backgroundColor={backgroundColor}
      />
      {!category ? (
        <Form onSelectCategory={handleCategorySelect} />
      ) : result ? (
        <Result score={result.score} total={result.total} />
      ) : (
        <QuizCard category={category} onFinish={handleFinish} />
      )}
    </div>
  );
};
