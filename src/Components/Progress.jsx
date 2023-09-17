import { useQuiz } from "../contexts/QuizContext";

const Progress = () => {
  const { points, maxPoints, numQuestions, index, answer } = useQuiz();

  return (
    <div className="progress">
      <progress max={numQuestions} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </div>
  );
};

export default Progress;
