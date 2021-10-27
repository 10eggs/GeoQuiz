import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { correct, questions, isModalOpen, playAgain } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>congratulations!</h2>
        <p>
          You answered {(correct / questions.length) * 100}% of questions
          correctly!
        </p>
        <button className="close-btn" onClick={playAgain}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
