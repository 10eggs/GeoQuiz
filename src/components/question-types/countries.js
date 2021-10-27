import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Countries = (props) => {
  const { checkAnswer } = useGlobalContext();
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer(props.corr_ans === userAnswer.toLowerCase());
    setUserAnswer("");
  };

  return (
    <>
      <h2 dangerouslySetInnerHTML={{ __html: props.qtext }} />
      <div className="countries-question-description">
        <p dangerouslySetInnerHTML={{ __html: props.des }}></p>
      </div>
      <form className="answer-form" onSubmit={handleSubmit}>
        <div className="form-control-answer">
          <label htmlFor="userAnswer">
            <b>Answer :</b>
          </label>
          <input
            type="text"
            id="userAnswer"
            name="userAnswer"
            value={userAnswer}
            onChange={(e) => {
              setUserAnswer(e.target.value);
            }}
          />
        </div>
        <div className="check-answer-container">
          <button type="submit" className="check-answer">
            Check
          </button>
        </div>
      </form>
    </>
  );
};

export default Countries;
