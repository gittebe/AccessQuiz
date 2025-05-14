import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Form } from "../../components/Form/Form";
import { QuizCard } from "../../components/QuizCard/QuizCard";
import { Result } from "../../components/Result/Result";
import "./Quiz.css";

export const Quiz = () => {
  const [category, setCategory] = useState(null);
  const [result, setResult] = useState(null);
  const [headerText, setHeaderText] = useState("AccessQuiz")
  const [paragraphText, setParagraphText] = useState("You can choose from four categories. The four topics are inline with the four WCAG 2.2 principles for web accessibility")

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

  const handleFinish = (score, total) => {
    setResult({ score, total });
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
