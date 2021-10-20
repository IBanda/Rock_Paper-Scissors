import styled from "styled-components";
import Weapon from "./Weapon";
import React from "react";
import { WeaponName } from "./Arena";

interface Props {
  onWeaponFire: React.Dispatch<React.SetStateAction<WeaponName>>;
}

const StartViewDiv = styled.div`
  background-image: url("/bg-triangle.svg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: auto;
  width: 375px;
  height: 300px;
  position: relative;
  margin-top: 8em;
  @media (max-width: 767.98px) {
    width: 200px;
    height: 180px;
  }
  .btn {
    position: absolute;
    &-paper {
      top: -70px;
      left: -20px;
    }
    &-scissors {
      top: -70px;
      right: -20px;
    }
    &-rock {
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media (max-width: 767.98px) {
      &-paper,
      &-scissors {
        top: -40px;
      }
      &-paper {
        left: -10px;
      }
    }
  }
`;

export default function Start({ onWeaponFire }: Props) {
  return (
    <StartViewDiv>
      <Weapon onFire={onWeaponFire} name="paper" />
      <Weapon onFire={onWeaponFire} name="scissors" />
      <Weapon onFire={onWeaponFire} name="rock" />
    </StartViewDiv>
  );
}
