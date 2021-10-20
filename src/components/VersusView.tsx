import React, { useEffect, useState } from "react";
import Weapon from "./Weapon";
import styled from "styled-components";
import Result from "./Result";
import { WeaponName } from "./Arena";
import getWinner from "../utils/getWinner";

const View = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: auto;
  margin-top: 4em;
  @media (max-width: 575.98px) {
    flex-wrap: wrap;
  }
  .player,
  .house {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      width: 16em;
      height: 16em;
      img {
        max-width: 6em;
        width: 100%;
      }
      @media (max-width: 575.98px) {
        width: 8em;
        height: 8em;
        img {
          max-width: 3em;
          width: 100%;
        }
      }
    }

    h1 {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.25em;
      margin-bottom: 2em;
      @media (max-width: 575.98px) {
        font-size: 0.9em;
        order: 2;
        margin-bottom: 0;
        margin-top: 2em;
      }
    }
    .ripple {
      border-radius: 50%;
      box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.02),
        0 0 0 60px rgba(255, 255, 255, 0.02),
        0 0 0 90px rgba(255, 255, 255, 0.02);
    }
  }
  .player {
    margin-right: 2em;
  }
  .house {
    margin-left: 2em;
    .placeholder {
      width: 12em;
      height: 12em;
      margin-top: 1em;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      @media (max-width: 575.98px) {
        width: 5.5em;
        height: 5.5em;
        margin-top: 0;
      }
    }
  }
`;

interface Props {
  weaponName: "paper" | "scissors" | "rock";
  setWeapon: React.Dispatch<React.SetStateAction<WeaponName>>;
}

export enum WeaponsNumMapping {
  paper = 1,
  rock = 2,
  scissors = 3
}

function getRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}

export default function VersusView({ weaponName, setWeapon }: Props) {
  const [houseWeapon, setHouseWeapon] = useState<typeof weaponName>();
  const [winner, setWinner] = useState<"draw" | "player" | "house">();
  useEffect(() => {
    let timer = setTimeout(() => {
      setHouseWeapon(WeaponsNumMapping[getRandomNumber()] as typeof weaponName);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (houseWeapon) {
      setWinner(getWinner(weaponName, houseWeapon));
    }
  }, [houseWeapon, weaponName]);

  return (
    <View>
      <div className="player">
        <h1>you picked</h1>
        <div className={`${winner === "player" ? "ripple" : ""}`}>
          <Weapon name={weaponName} />
        </div>
      </div>
      {houseWeapon && <Result winner={winner} onPlayAgain={setWeapon} />}
      <div className="house">
        <h1>the house picked</h1>
        {houseWeapon ? (
          <div className={`${winner === "house" ? "ripple" : ""}`}>
            <Weapon name={houseWeapon} />
          </div>
        ) : (
          <div className="placeholder" data-testid="placeholder" />
        )}
      </div>
    </View>
  );
}
