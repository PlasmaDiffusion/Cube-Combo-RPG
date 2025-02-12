import BattlerObject from "../interfaces/battlerObject";
import usePlayerStore from "../states/playerStore";

export function initializeGame(character: string) {
  switch (character) {
    case "Wizard":
      setCharacter({
        hp: 10,
        maxHp: 10,
        mp: 20,
        maxMp: 20,
        gold: 5,
        atk: 1,
        def: 0,
      });
      break;
    case "Black Belt":
      setCharacter({
        hp: 20,
        maxHp: 20,
        mp: 5,
        maxMp: 5,
        gold: 0,
        atk: 3,
        def: 1,
      });
      break;
  }
}

function setCharacter(character: BattlerObject) {
  usePlayerStore.setState({ battler: character });
}
