import { useCallback } from "react";
import { MenuOption, MenuEventType } from "../../interfaces/menuOptions";

import "./index.scss";

interface Props {
  title: string;
  options: MenuOption[];
}

function ListMenu({ title, options }: Props) {
  const onOptionClicked = useCallback(
    (option: MenuOption) => {
      switch (option.eventType) {
        case MenuEventType.BACK:
          //Go back to the previous menu
          break;
        case MenuEventType.SUB_MENU:
            //Get game state of current menu, swap menus, and rerender this component
          break;
      }
    },
    [options]
  );

  return (
    <div className="listContainer">
      <h1>{title}</h1>
      {options.map((option, index) => (
        <button
          key={option.name + index}
          onClick={() => onOptionClicked(option)}
        >
          {option.name} {option.secondaryText}
        </button>
      ))}
    </div>
  );
}

export default ListMenu;
