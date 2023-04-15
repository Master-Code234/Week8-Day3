import Score from "./Score";

export default function Student({ name, bio, scores }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            <Score date={score.date} score={score.score} />
          </li>
        ))}
      </ul>
    </div>
  );
}
