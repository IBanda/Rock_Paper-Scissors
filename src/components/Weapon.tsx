import styled from "styled-components";
import React from "react";
import { WeaponName } from "./Arena";

interface Props {
  name: "paper" | "scissors" | "rock";
  onFire?: React.Dispatch<React.SetStateAction<WeaponName>>;
}

const ColorMappings = {
  paper: {
    border: "#516df2",
    shadow: "#2945c2"
  },
  scissors: {
    border: "#eca71e",
    shadow: "#c76c1d"
  },
  rock: {
    border: "#dc3757",
    shadow: "#9d1634"
  }
};

const Button = styled.button`
  width: 12em;
  height: 12em;
  border-radius: 50%;
  border: 20px solid ${(props) => ColorMappings[props.name as keyof typeof ColorMappings].border};
  box-shadow: 0 5px ${(props) => ColorMappings[props.name as keyof typeof ColorMappings].shadow};
  padding: 0;
  background-color: #e3e5e6;
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -6px rgba(186, 191, 211, 0.8);
    border-radius: 50%;
  }
  @media (max-width: 575.98px) {
    width: 8em;
    height: 8em;
    img {
      max-width: 3em;
      width: 100%;
    }
  }
`;

export default function Weapon({ name, onFire }: Props) {
  return (
    <Button
      onClick={() => onFire?.(name)}
      className={`btn btn-${name}`}
      name={name}
      data-testid="weapon"
    >
      <div>
        <img src={`/icon-${name}.svg`} alt={name} />
      </div>
    </Button>
  );
}
