import { create } from "zustand";
import { MenuType } from "../interfaces/menuOptions";

interface GameState {
  currentMenu: MenuType;
  previousMenu: MenuType;
  currentRound: number;
  currentArea: number;

  setCurrentMenu: (menu: MenuType) => void;
  setPreviousMenu: (menu: MenuType) => void;

  setCurrentRound: (round: number) => void;
  setCurrentArea: (round: number) => void;

  resetValues: () => void;
  resetValuesAndStartGame: () => void;
}

const useGameStore = create<GameState>((set) => ({
  currentMenu: MenuType.MAIN_MENU,
  previousMenu: MenuType.MAIN_MENU,
  currentRound: 1,
  currentArea: 1,

  setCurrentMenu: (menu) => set({ currentMenu: menu }),
  setPreviousMenu: (menu) => set({ previousMenu: menu }),

  setCurrentRound: (round) => set({ currentRound: round }),
  setCurrentArea: (area) => set({ currentRound: area }),

  resetValues: () =>
    set(() => ({
      currentMenu: MenuType.MAIN_MENU,
      previousMenu: MenuType.MAIN_MENU,
      currentRound: 1,
      currentArea: 1,
    })),

  resetValuesAndStartGame: () =>
    set(() => ({
      currentMenu: MenuType.BATTLE,
      previousMenu: MenuType.MAIN_MENU,
      currentRound: 1,
      currentArea: 1,
    })),
}));

export default useGameStore;
