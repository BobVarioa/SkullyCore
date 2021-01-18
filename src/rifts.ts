import { CommonValue } from "cppkies/dist/helpers";
import { AdvancedHeavenlyUpgrade, TagCondition } from "./core";

/**
 * A class that adds a Heavenly Upgrade that is only visble if it's page is selected
 * @class 
 */
export class PagedHeavenlyUpgrade extends AdvancedHeavenlyUpgrade {
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
    constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, position: [number, number], page: string, icon: CommonValue<Game.Icon>, parents?: (string | number)[], buyFunc?: () => void)  {
        super(name, desc, price, icon, position, parents, buyFunc);
        if (typeof window.SkullyCore.pages[page] === "undefined") window.SkullyCore.pages[page] = []
        window.SkullyCore.pages[page].push(this)     
        if (page !== "vanilla") Game.PrestigeUpgrades.pop()
    }
}

/**
 * A class that allows you to transfer yourself to another page. Note : You probably shouldn't define this yourself unless you know what you're doing
 * @class 
 */
export class RiftUpgrade extends PagedHeavenlyUpgrade {
    /**
     * The page that this rift is from's id
     */
    public back: string;

    /**
     * The page that this rift goes to's id
     */
    public goto: string;

    /**
     * Don't change this. This is for checking if the rift is a rift when going through tags. 
     */
    public isRift = true;
    
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
    constructor(name: string, desc: CommonValue<string>, position: [number, number], goto: string, back: string, icon: CommonValue<Game.Icon> = [1, 2, "https://raw.githubusercontent.com/MasterOfBob777/SkullyCore/master/static/skullyCoreIcons.png"], parents?: (string | number)[], buyFunc?: () => void)  {
        super(name, desc, 0, position, back, icon, parents, buyFunc);
        this.exclude = {
            all: true
        }
        this.back = back;
        this.noTags = true;
        this.unlocked = 1;
        this.bought = 1;
        this.noNeuromancy= true;
        this.goto = goto;
    }

    public activateFunction = () => {
        window.SkullyCore.currentPage = this.goto
        Game.BuildAscendTree()
    }
}
new TagCondition("Rift", "#9700cf", (me) => {
    /*
        Why do I not just change the pool? Because It breaks HUs, why you ask? Because Orteil that's why.
    */
    if (typeof me.isRift !== "undefined") {
        return true
    } else {
        return false
    }
})

/**
 * 
 * @class
 */
export class PrestigePage {
    /**
     * The page's name in a sentence
     */
    public name: string;

    /**
     * The internal id of the page
     */
    public id: string;

    /**
     * The rift to take you from the vanilla page to this page.
     */
    public Rift: RiftUpgrade;
    
    /**
     * The rift to take you from the this page to vanilla page.
     */
    public VanillaRift: RiftUpgrade;

    /**
     * Creates a PrestigePage
     * @param name The page's name in a sentence
     * @param id The internal id of the page
     * @param parents Your Goto Rift's parents (vanilla page)
     * @param gotoicon Your Goto Rift's icon
     * @param backicon Your Back Rift's icon
     */
    constructor (name: string, id: string, parents: (string | number)[], gotoicon?: Game.Icon, backicon?: Game.Icon){
        this.name = name;
        this.id = id;
        this.Rift = new RiftUpgrade("Goto " + this.name + "...", "Goto a new universe of possiblities. Don't worry you can come back.", [-30, -130], this.id, "vanilla", gotoicon, parents)
        this.VanillaRift = new RiftUpgrade("Goto Vanilla...", "Takes you back to the vanilla prestige tree.", [-30,-30], "vanilla", this.id, backicon);
    }

    // TODO : Idleverse lore or something
}
