export interface MenuOption {
    name: string;
    secondaryText?: string;
    subMenuToOpen?: string;
    eventType: MenuEventType;
}

export enum MenuEventType
{
    SUB_MENU,
    BACK,
    ATTACK,
    USE_ITEM,
}