import React, { useState } from "react";
import styled from "styled-components";
import Scoreboard from "./components/Scoreboard";
import Arena from "./components/Arena";
import Rules from "./components/Rules";

const GameView = styled.div`
  background: radial-gradient(#192648, #161c3e);
  min-height: 100vh;
  padding: 3em 1em;
`;

export const ScoreContext = React.createContext<React.Dispatch<
  React.SetStateAction<number>
> | null>(null);

export default function App() {
  const [score, setScore] = useState(() => {
    const storedScore = localStorage.getItem("score");
    return storedScore ? Number(storedScore) : 0;
  });
  return (
    <GameView>
      <Scoreboard score={score} />
      <ScoreContext.Provider value={setScore}>
        <Arena />
      </ScoreContext.Provider>
      <Rules />
    </GameView>
  );
}
