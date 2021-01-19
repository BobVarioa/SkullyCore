/// <reference types="cookieclicker" />
import { CommonValue } from "cppkies/dist/helpers";
import { AdvancedHeavenlyUpgrade } from "./core";
/**
 * A class that adds a Heavenly Upgrade that is only visble if it's page is selected
 * @class
 */
export declare class PagedHeavenlyUpgrade extends AdvancedHeavenlyUpgrade {
    /**
     * Creates a PagedHeavenlyUpgrade.
     * @param name The name of the heavenly upgrade
     * @param desc The heavenly upgrade's description
     * @param price The price of the heavenly upgrade
     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
     * @param page The page's id that denotes when your heavenly upgrade will be visable
     * @param icon The icon of your heavenly upgrade
     * @param parents Your heavenly upgrade's parents
     * @param buyFunc A function that gets called when buying your heavenly upgrade
     */
    constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, position: [number, number], page: string, icon: CommonValue<Game.Icon>, parents?: (string | number)[], buyFunc?: () => void);
}
/**
 * A class that allows you to transfer yourself to another page. Note : You probably shouldn't define this yourself unless you know what you're doing
 * @class
 */
export declare class RiftUpgrade extends PagedHeavenlyUpgrade {
    /**
     * The page that this rift is from's id
     */
    back: string;
    /**
     * The page that this rift goes to's id
     */
    goto: string;
    /**
     * Don't change this. This is for checking if the rift is a rift when going through tags.
     */
    isRift: boolean;
    /**
     * Creates a RiftUpgrade.
     * @param name The name of the heavenly upgrade
     * @param desc The heavenly upgrade's description
     * @param position The position of the heavenly upgrade on screen, (-30, -30) is the origin
     * @param goto
     * @param back
     * @param icon The icon of your heavenly upgrade
     * @param parents Your heavenly upgrade's parents
     * @param buyFunc A function that gets called when buying your heavenly upgrade
     */
    constructor(name: string, desc: CommonValue<string>, position: [number, number], goto: string, back: string, icon?: CommonValue<Game.Icon>, parents?: (string | number)[], buyFunc?: () => void);
    activateFunction: () => void;
}
/**
 *
 * @class
 */
export declare class PrestigePage {
    /**
     * The page's name in a sentence
     */
    name: string;
    /**
     * The internal id of the page
     */
    id: string;
    /**
     * The rift to take you from the vanilla page to this page.
     */
    Rift: RiftUpgrade;
    /**
     * The rift to take you from the this page to vanilla page.
     */
    VanillaRift: RiftUpgrade;
    /**
     * Creates a PrestigePage
     * @param name The page's name in a sentence
     * @param id The internal id of the page
     * @param parents Your Goto Rift's parents (vanilla page)
     * @param gotoicon Your Goto Rift's icon
     * @param backicon Your Back Rift's icon
     */
    constructor(name: string, id: string, parents: (string | number)[], gotoicon?: Game.Icon, backicon?: Game.Icon);
}
