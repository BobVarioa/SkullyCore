/// <reference types="cookieclicker" />
import { CrateLike, AdvancedAchievement, AdvancedHeavenlyUpgrade, AdvancedUpgrade, AuthorAchievement, TagCondition, TagConditional } from "./core";
import { PrestigePage, RiftUpgrade, PagedHeavenlyUpgrade } from "./rifts";
import { TopBarMenuWidget, BuildingBarMenuWidget, BarWidget } from "./bars";
import { Task } from "./quests";
declare const SkullyCore: {
    AdvancedAchievement: typeof AdvancedAchievement;
    AdvancedHeavenlyUpgrade: typeof AdvancedHeavenlyUpgrade;
    AdvancedUpgrade: typeof AdvancedUpgrade;
    AuthorAchievement: typeof AuthorAchievement;
    TagCondition: typeof TagCondition;
    TagConditions: [string, string, TagConditional][];
    PrestigePage: typeof PrestigePage;
    RiftUpgrade: typeof RiftUpgrade;
    PagedHeavenlyUpgrade: typeof PagedHeavenlyUpgrade;
    currentPage: string;
    pages: {
        [pageid: string]: Game.HeavenlyUpgrade[];
    };
    TopBarMenuWidget: typeof TopBarMenuWidget;
    BuildingBarMenuWidget: typeof BuildingBarMenuWidget;
    BarWidgets: {
        TopBar: {
            currentPos: number;
            Bars: TopBarMenuWidget[];
        };
        BuildingBar: {
            currentPos: Record<string, number>;
            Bars: Record<string, BuildingBarMenuWidget[]>;
        };
    };
    Task: typeof Task;
    ActiveTasks: Task[];
    onLoad: (() => void)[];
};
declare global {
    interface Window {
        SkullyCore: typeof SkullyCore | undefined;
    }
}
export default SkullyCore;
export { CrateLike, TagConditional, BarWidget };
