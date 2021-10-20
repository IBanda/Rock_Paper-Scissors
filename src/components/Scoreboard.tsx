import styled from "styled-components";

interface Props {
  score: number;
}

const ScoreboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 590px;
  margin: auto;
  border: 3px solid #31415e;
  border-radius: 15px;
  padding: 1em;
  .title {
    padding: 0.5em;
    color: #fff;
    h1 {
      margin: 0;
      font-size: 1.25em;
      letter-spacing: -1px;
      text-transform: uppercase;
      @media (min-width: 768px) {
        line-height: 30px;
        font-size: 2.15em;
      }
    }
  }
  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    width: 7em;

    h2 {
      font-size: 0.8em;
      color: #5d6ab2;
      text-transform: uppercase;
    }
    h1 {
      margin: 0;
      color: #57556a;
    }
    @media (min-width: 768px) {
      width: 8.75em;
      h1 {
        font-size: 4em;
      }
    }
  }
`;

export default function Scoreboard({ score }: Props) {
  return (
    <ScoreboardWrapper>
      <div className="title">
        <h1>rock</h1>
        <h1>paper</h1>
        <h1>scissors</h1>
      </div>
      <div className="score">
        <h2>score</h2>
        <h1>{score}</h1>
      </div>
    </ScoreboardWrapper>
  );
}
