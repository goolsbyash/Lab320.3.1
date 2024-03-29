import Score from "./Score";

export default function Learner(props) {
  const learners = props.learners;
  return (
    <div>
      {learners.map((learner) => (
        <div>
          <h2>{learner.name}</h2>
          <section style={{ width: "20%", float: "center" }}>
            <b>Biograpy</b> <br /> {learner.bio} <br />
          </section>
          <section>
            <b>Scores</b> <br />
            {learner.scores.map((score) => (
              <Score scores={score}></Score>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
