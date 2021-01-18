// Copied from Cppkies 2 : Electric Boogaloo

import {
    CrateLike,
    AdvancedAchievement,
    AdvancedHeavenlyUpgrade,
    AdvancedUpgrade,
    AuthorAchievement,
    TagCondition,
    TagConditional,
    TagConditions
} from "./core"

import {
    PrestigePage,
    RiftUpgrade,
    PagedHeavenlyUpgrade,
} from "./rifts"

import {
    TopBarMenuWidget,
    BuildingBarMenuWidget,
    BarWidget
} from "./bars"

import {
    Effect
} from "./cosmetics"

import {
    Task
} from "./quests"

const SkullyCore = {
    // Base
    AdvancedAchievement,
    AdvancedHeavenlyUpgrade,
    AdvancedUpgrade,
    AuthorAchievement,
    TagCondition,
    TagConditions,

    // Prestige Pages & Rifts
    PrestigePage,
    RiftUpgrade,
    PagedHeavenlyUpgrade,
    currentPage: "vanilla",
    pages: {"vanilla": Game.PrestigeUpgrades} as {[pageid: string]: Game.HeavenlyUpgrade[]},

    // Injecting into bars to add stuff (ex. sugar lumps)
    TopBarMenuWidget,
    BuildingBarMenuWidget,
    BarWidgets: {
        TopBar: {
            currentPos: 12,
            Bars: [] as TopBarMenuWidget[]
        },
        BuildingBar: {
            currentPos: {} as Record<string, number>,
            Bars: {} as Record<string, BuildingBarMenuWidget[]>
        }
    },

    // Full screen cosmetic effects
    Effect,

    // Task Effects (aka. quests), tasks that have a completion req and give a reward when completed 
    Task,

    // OnLoad
    onLoad: [] as (() => void)[],
}

declare global {
	interface Window {
		SkullyCore: typeof SkullyCore | undefined
	}
}
window.SkullyCore = SkullyCore

export default SkullyCore
export { 
    CrateLike, 
    TagConditional,
    BarWidget
}
