export default function Score(props) {
  const scores = props.scores;
  console.log(scores);
  return (
    <ul>
      <li>
        Date: {scores.date} <br />
        Score: {scores.score}
      </li>
    </ul>
  );
}
