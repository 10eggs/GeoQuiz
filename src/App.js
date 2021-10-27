import "./App.css";
import { questionList } from "./questions/questions";
import { useGlobalContext } from "./components/context";
import Modal from "./components/Modal";
import SetupForm from "./components/SetupForm";
import Navbar from "./components/Navbar";
import Capitals from "./components/question-types/capitals";
import Buildings from "./components/question-types/buildings";
import Countries from "./components/question-types/countries";

function App() {
  const {
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
  } = useGlobalContext();

  const {
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers,
    description,
  } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);

  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  if (waiting) {
    return (
      <>
        <SetupForm />
      </>
    );
  }
  return (
    <>
      <main>
        <Modal />
        <section className="quiz">
          <Navbar />
          <article className="container">
            {quiz.category === "capitals" && (
              <Capitals
                qtext={question}
                ans={answers}
                corr_ans={correct_answer}
              />
            )}
            {quiz.category === "buildings" && (
              <Buildings
                qtext={question}
                ans={answers}
                corr_ans={correct_answer}
              />
            )}
            {quiz.category === "countries" && (
              <Countries
                qtext={question}
                corr_ans={correct_answer}
                des={description}
              />
            )}
          </article>
          <div className="quiz-nav-container">
            <button className="previous-question" onClick={previousQuestion}>
              previous question
            </button>
            <button className="next-question" onClick={nextQuestion}>
              next question
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
