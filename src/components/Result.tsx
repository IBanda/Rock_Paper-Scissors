import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ScoreContext } from "../App";
import { WeaponName } from "./Arena";

interface Props {
  winner: "draw" | "player" | "house" | undefined;
  onPlayAgain: React.Dispatch<React.SetStateAction<WeaponName>>;
}

const ResultDiv = styled.div`
  text-align: center;
  align-self: center;
  margin: 0 1em;
  @media (max-width: 575.98px) {
    order: 2;
    margin: 2em 1em;
  }
  h1 {
    color: #fff;
    text-transform: uppercase;
    @media (max-width: 575.98px) {
      font-size: 1em;
    }
  }
  button {
    border: 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 1em 3em;
    text-transform: uppercase;
    color: #b75065;
  }
`;

export default function Result({ winner, onPlayAgain }: Props) {
  const updateScore = useContext(ScoreContext);

  useEffect(() => {
    if (winner === "player")
      updateScore?.((prev) => {
        const newScore = prev + 1;
        localStorage.setItem("score", String(newScore));
        return newScore;
      });
  }, [winner, updateScore]);

  const msg = `You ${
    winner !== "draw" ? (winner === "player" ? "win" : "lose") : "draw"
  }`;

  return (
    <ResultDiv data-testid="result">
      <h1>{msg}</h1>
      <button onClick={() => onPlayAgain(undefined)}>Play Again</button>
    </ResultDiv>
  );
}
