import React from "react";
import { useGlobalContext } from "../context";

const Capitals = (props) => {
  const { checkAnswer } = useGlobalContext();
  return (
    <>
      <div className="btn-container">
        <h2 dangerouslySetInnerHTML={{ __html: props.qtext }} />
        {props.ans.map((a, index) => {
          return (
            <button
              key={index}
              className="answer-btn"
              onClick={() => {
                checkAnswer(props.corr_ans === a);
              }}
              dangerouslySetInnerHTML={{ __html: a }}
            ></button>
          );
        })}
      </div>
    </>
  );
};

export default Capitals;
