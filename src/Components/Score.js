export default function Score(props) {
  const scores = props.scores;
  console.log(scores);
  return (
    <ul>
      <li>Date: {scores.date}</li>
      <li>Score: {scores.score}</li>
    </ul>
  );
}
