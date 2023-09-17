import { useQuiz } from "../contexts/QuizContext";

const FinishScreen = () => {
  const { points, maxPoints, dispatch, highscore } = useQuiz();

  const percentage = (points / maxPoints) * 100;
  let emoji;

  if (percentage === 100) emoji = "🏆";
  if (percentage >= 80 && percentage < 100) emoji = "🥇";
  if (percentage >= 60 && percentage < 80) emoji = "🥈";
  if (percentage >= 40 && percentage < 60) emoji = "🤔";
  if (percentage >= 20 && percentage < 40) emoji = "😶";
  if (percentage >= 0 && percentage < 20) emoji = "😂";
  if (percentage === 0) emoji = "🤦🏼‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPoints} (
        {percentage.toFixed(0)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
