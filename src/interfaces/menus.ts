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
    options: [],
  },
];
