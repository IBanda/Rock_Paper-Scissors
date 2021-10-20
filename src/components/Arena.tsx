import { useState } from "react";
import StartView from "./StartView";
import VersusView from "./VersusView";

export type WeaponName = "paper" | "scissors" | "rock" | undefined;

export default function Arena() {
  const [weapon, setWeapon] = useState<WeaponName>();
  return weapon ? (
    <VersusView weaponName={weapon} setWeapon={setWeapon} />
  ) : (
    <StartView onWeaponFire={setWeapon} />
  );
}
