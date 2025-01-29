import { useCallback } from "react";
import { MenuOption, MenuEventType } from "../../interfaces/menuOptions";

import "./index.css";

interface Props {
  title: string;
  options: MenuOption[];
}

//All game events occur here once an item in the menu is selected
function ListMenu({ title, options }: Props) {
  const onOptionClicked = useCallback(
    (option: MenuOption) => {
      switch (option.eventType) {
        case MenuEventType.BACK:
          //Go back to the previous menu
          break;
        case MenuEventType.SUB_MENU:
          //option.subMenuToOpen
          //Get game state of current menu, swap menus, and rerender this component
          break;
      }
    },
    []
  );

  return (
    <div className="listContainer border-4 border-double rounded-sm border-indigo-500">
      <h1
        className="text-2xl
 font-bold tracking-tight text-gray-900 p-6"
      >
        {title}
      </h1>
      {options.map((option, index) => (
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
