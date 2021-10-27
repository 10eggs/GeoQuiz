import React, { useState, useContext, useEffect } from "react";
import { questionList } from "../questions/questions";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWating] = useState(true);
  const [quiz, setQuiz] = useState({
    amount: 3,
    category: "capitals",
    difficulty: "easy",
  });
  const [correct, setCorrect] = useState(0);

  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState(questionList);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Rendered");

  const checkAnswer = (correctAnswer) => {
    console.log("Is answer correct? ", correctAnswer);
    if (correctAnswer) setCorrect((actual) => actual + 1);
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextQuestion = () => {
    setIndex((actual) => {
      const index = actual + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const previousQuestion = () => {
    setIndex((actual) => {
      if (actual === 0) return 0;
      else {
        return actual - 1;
      }
    });
  };
  const playAgain = () => {
    closeModal();
    setQuestions(questionList);
    setIndex(0);
    setCorrect(0);
    setWating(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const filteredQ = prepareQuestions(amount, category, difficulty);
    setQuestions(filteredQ);
    setWating(false);
  };

  const prepareQuestions = (am, cat, diff) => {
    const filtered = questionList.filter(
      (q) => q.category === cat && q.difficulty === diff
    );
    console.log("Number of questions: ", filtered.length);
    console.log("Question: ", filtered);
    if (filtered.length < am) {
      throw new Error(
        "Number of available questions is less than required number."
      );
    } else {
      return filtered.slice(0, am);
    }
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        quiz,
        correct,
        index,
        questions,
        isModalOpen,
        checkAnswer,
        openModal,
        closeModal,
        nextQuestion,
        previousQuestion,
        playAgain,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
