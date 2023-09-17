import { useQuiz } from "../contexts/QuizContext";

const Options = ({ question }) => {
  const { dispatch, answer } = useQuiz();
  const isAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn-option btn ${answer === index && "answer"} ${
            isAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
