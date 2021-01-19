/// <reference types="cookieclicker" />
import { CommonValue } from "cppkies/dist/helpers";
import Cppkies from "cppkies";
export declare type CrateLike = (Game.Upgrade | Game.HeavenlyUpgrade | Game.Achievement | AdvancedUpgrade | AdvancedHeavenlyUpgrade | AdvancedAchievement | any);
export interface ExcludeTypes {
    total?: boolean;
    debug?: boolean;
    prestige?: boolean;
    cookie?: boolean;
    other?: boolean;
    shadow?: boolean;
    all?: true;
}
export declare type TagConditional = (boolean | ((me: CrateLike) => boolean));
export declare let TagConditions: [string, string, TagConditional][];
/**
 * A class that adds a tag to a CrateLike as the name suggests
 * @class
 */
export declare class TagCondition {
    /**
     * The name of your tag
     */
    name: string;
    /**
     * The color of your tag. Ex. "#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000", etc.
     */
    color: string;
    /**
     * A function that should return a boolean on whether this tag should be added to a CrateLike.
     * Should also check if the crate has noTags and respect that, unless you need to do that.
     */
    tagFunction: TagConditional;
    /**
     * A class that adds a tag to a CrateLike as the name suggests
     * @param name The tag's name
     * @param color The color of your tag
     * @param tagFunction A function that should return a boolean on whether this tag should be added to a CrateLike
     */
    constructor(name: string, color: string, tagFunction: TagConditional);
}
/**
 * An extended Achievement class that add a few utility features
 * @class
 */
export declare class AdvancedAchievement extends Cppkies.Achievement {
    /**
     * The pool that this achievement is in
     */
    pool: any;
    /**
     * A function which returns the description of the achievement
     */
    descFunc: () => string;
    /**
     * A function which returns the icon of the achievement
     */
    iconFunction: () => Game.Icon;
    /**
     * The groups to exclude this achievement from
     */
    exclude: ExcludeTypes;
    /**
     * Remove all tags? Done before calculating tag conditions
     */
    noTags: boolean;
    /**
     * Can you use neuromancy with this achievement?
     */
    noNeuromancy: boolean;
    /**
     * Creates a achievement with a few utility features.
     * @param name The name of the achievement
     * @param desc The description of it
     * @param icon The icon for it
     */
    constructor(name: string, desc: string, icon: Game.Icon);
}
/**
 * An class to add your own credits to your mod
 * @class
 */
export declare class AuthorAchievement extends AdvancedAchievement {
    /**
     * Creates an Author Achievement
     * @param name Your name / The author's name
     * @param desc A short desciption of what you or the author did
     * @param icon An icon that preferably describes yourself / the author
     */
    constructor(name: string, desc: string, icon: Game.Icon);
}
/**
 * An extended Upgrade class that add a few utility features
 * @class
 */
export declare class AdvancedUpgrade extends Cppkies.Upgrade {
    /**
     * The pool that this upgrade is in
     */
    pool: any;
    /**
     * The groups to exclude this upgrade from
     */
    exclude: ExcludeTypes;
    /**
     * Remove all tags? Done before calculating tag conditions
     */
    noTags: boolean;
    /**
     * Can you use neuromancy with this achievement?
     */
    noNeuromancy: boolean;
    /**
     * Creates a AdvancedUpgrade
     * @param name The name of your upgrade
     * @param desc Your upgrade's description
     * @param price The price of your upgrade
     * @param icon Your upgrade's icon
     * @param buyFunc A function that gets called when your upgrade is bought
     */
    constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, buyFunc?: () => void);
}
/**
 * An extended Heavenly Upgrade class that add a few utility features
 * @class
 */
export declare class AdvancedHeavenlyUpgrade extends Cppkies.HeavenlyUpgrade {
    /**
     * The pool that this heavenly upgrade is in
     */
    pool: any;
    /**
     * The groups to exclude this heavenly upgrade from
     */
    exclude: ExcludeTypes;
    /**
     * Remove all tags? Done before calculating tag conditions
     */
    noTags: boolean;
    /**
     * Can you use neuromancy with this upgrade?
     */
    noNeuromancy: boolean;
    /**
     * Creates a AdvancedHeavenlyUpgrade.
     * @param name The name of the heavenly upgrade
     * @param desc The heavenly upgrade's description
     * @param price The price of the heavenly upgrade
     * @param icon The icon of your heavenly upgrade
     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
     * @param parents Your heavenly upgrade's parents
     * @param buyFunc A function that gets called when buying your heavenly upgrade
     */
    constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, position: [number, number], parents?: (string | number)[], buyFunc?: () => void);
}
export interface AdvancedBuffInterface extends Game.Buff {
    timeless?: boolean;
    dismissable?: boolean;
}
export declare class AdvancedBuff extends Game.buffType {
    timeless: boolean;
    dismissable: boolean;
    constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface);
}
