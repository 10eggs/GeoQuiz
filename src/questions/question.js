import React, { useState, useEffect, useRef } from "react";
import { questions } from "./data";

//Why use state is not invoking when question is re-rendered?

const Question = () => {
  const [showResult, setShowResult] = useState({ text: "", isOpen: false });
  const vInfo = useRef(null);

  useState(() => {
    console.log("useRef is ", vInfo.current);
  });

  const closeModal = () => {
    setShowResult({ ...showResult, isOpen: false });
  };

  const checkAnswer = (e, correctAnswer) => {
    correctAnswer === e.target.innerText
      ? setShowResult({ text: "Correct result!", isOpen: true })
      : setShowResult({ text: "Incorrect result!", isOpen: true });
  };

  // const showResult = () => {
  //   let className = "";
  //   if (resultInfo === "Correct result!") className = "correct-answer-info";
  //   if (resultInfo === "Incorrect result!") className = "wrong-answer-info";
  //   console.log(`Classname is ${className}`);
  //   return <div className={className}>{resultInfo}</div>;
  // };

  const question = () => {
    const question = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = question.correct;
    return (
      <div>
        <h4>Question: {question.question}</h4>
        {question.answers.map((answer) => {
          return (
            <div
              key={Math.floor(Math.random() * 1000)}
              className="answer"
              onClick={(e) => {
                checkAnswer(e, correctAnswer);
              }}
            >
              {answer}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div>{question()}</div>
    </>
  );
};

export default Question;
