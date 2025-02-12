import { initializeGame } from "../menuEvents/startingAndEndingGame";
import { MenuEventType, MenuOption, MenuType } from "./menuOptions";

export interface Menu {
  title: string;
  options: MenuOption[];
}

export const menus: Menu[] = [
  {
    title: "Main Menu",
    options: [
      { name: "New Game", menuToOpen: MenuType.CHARACTER_SELECT },
      {
        name: "Continue",
        menuToOpen: MenuType.SHOP,
        commonEvent: MenuEventType.LOAD_GAME,
      },
    ],
  },
  {
    title: "Character Select",
    options: [
      { name: "New Game", menuToOpen: MenuType.CHARACTER_SELECT },
      {
        name: "Wizard",
        menuToOpen: MenuType.BATTLE,
        commonEvent: MenuEventType.START_GAME,
        uniqueEvent: () => {
          initializeGame("Wizard");
        },
      },
    ],
  },
  {
    title: "Battle", //Fight / Skills / Run commands
    options: [],
  },
  {
    title: "Enemy Select",
    options: [],
  },
  {
    title: "Skills",
    options: [],
  },
  {
    title: "Items",
    options: [],
  },
  {
    title: "Shop",
    options: [],
  },
];
