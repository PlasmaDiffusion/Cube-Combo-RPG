export interface MenuOption {
    name: string;
    secondaryText?: string;
    menuToOpen?: MenuType;
    commonEvent?: MenuEventType;
    uniqueEvent?: () => void;
}

export enum MenuEventType
{
    UNIQUE_EVENT_ONLY,
    SUB_MENU,
    BACK,
    ATTACK,
    USE_ITEM,
    START_GAME,
    LOAD_GAME,
}

export enum MenuType
{
    MAIN_MENU,
    CHARACTER_SELECT,
    BATTLE,
    ENEMY_SELECT,
    SKILLS,
    ITEMS,
    SHOP
}