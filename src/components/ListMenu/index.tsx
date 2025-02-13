import { useCallback } from "react";
import {
  MenuOption,
  MenuEventType,
  MenuType,
} from "../../interfaces/menuOptions";
import useGameStore from "../../states/gameStore";

import { Menu, menus } from "../../interfaces/menus";

import "./index.css";
import { useShallow } from "zustand/shallow";

interface Props {
  menu: Menu;
}

//All game events occur here once an item in the menu is selected
function ListMenu({ menu }: Props) {
  const [
    currentMenu,
    previousMenu,
    setCurrentMenu,
    setPreviousMenu,
    resetValuesAndStartGame,
  ] = useGameStore(
    useShallow((state) => [
      state.currentMenu,
      state.previousMenu,
      state.setCurrentMenu,
      state.setPreviousMenu,
      state.resetValuesAndStartGame,
    ])
  );

  const onOptionClicked = useCallback(
    (option: MenuOption) => {
      console.log(option.name);
      console.log(option);

      //Perform unique event
      if (option.uniqueEvent) {
        option.uniqueEvent();
      }
      switch (option.commonEvent) {
        case MenuEventType.BACK:
          //Go back to the previous menu
          //setCurrentMenu(previousMenu);
          break;
        case MenuEventType.SUB_MENU:
          if (option.menuToOpen) {
            setCurrentMenu(option.menuToOpen);
            //Get game state of current menu, swap menus, and rerender this component
          } else {
            console.warn("menuToOpen not set for", option.name);
          }
          break;
        case MenuEventType.ATTACK:
          setPreviousMenu(MenuType.BATTLE);
          setCurrentMenu(previousMenu);

          break;
        case MenuEventType.USE_ITEM:
          break;
        case MenuEventType.START_GAME:
          resetValuesAndStartGame();
          break;
        case MenuEventType.LOAD_GAME:
          break;
      }
    },
    [previousMenu, resetValuesAndStartGame, setCurrentMenu, setPreviousMenu]
  );

  return (
    <div className="listContainer border-4 border-double rounded-sm border-indigo-500">
      <h1
        className="text-2xl
 font-bold tracking-tight text-gray-900 p-6"
      >
        {menu.title}
      </h1>
      {menu.options.map((option, index) => (
        <button
          key={option.name + index}
          onClick={() => onOptionClicked(option)}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded active:bg-blue-600 active:text-black"
        >
          {option.name} {option.secondaryText}
        </button>
      ))}
    </div>
  );
}

export default ListMenu;
