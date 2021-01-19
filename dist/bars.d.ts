/// <reference types="cookieclicker" />
export declare class TopBarMenuWidget {
    id: string;
    icon: Game.Icon;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    tooltip: () => string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    onclick?: () => void;
    constructor(id: string, icon: Game.Icon, tooltip?: () => string);
    getDiv(): string;
}
export declare class BuildingBarMenuWidget {
    id: string;
    icon: Game.Icon;
    building: string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    tooltip: () => string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    onclick?: () => void;
    constructor(id: string, icon: Game.Icon, building: string, tooltip?: () => string);
    getDiv(): string;
}
export declare type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget);
