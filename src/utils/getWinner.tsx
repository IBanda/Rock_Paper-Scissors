import { WeaponsNumMapping } from "../components/VersusView";
type Weapon = "paper" | "scissors" | "rock";

export default function getWinner(playerWeapon: Weapon, houseWeapon: Weapon) {
  const player = WeaponsNumMapping[playerWeapon];
  const house = WeaponsNumMapping[houseWeapon];

  if (player === house) return "draw";

  if (player === 1 && house === 3) {
    return "house";
  } else if (player === 3 && house === 1) {
    return "player";
  }

  if (player < house) return "player";

  return "house";
}
