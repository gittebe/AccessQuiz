import { useState } from "react";
import { Button } from "../Button/Button";
import "./Form.css";

export const Form = ({ onSelectCategory }) => {

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory) {
      onSelectCategory(selectedCategory);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Pick a quiz!</legend>
        <div className="radio-box-group">
          {["perceivable", "operable", "robust", "understandable"].map((category) => (
            <div className="radio-box" key={category}>
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </fieldset>
      <div className="button-container">
        <Button />
      </div>
    </form>
  )
}