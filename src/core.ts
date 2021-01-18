import { CommonValue, injectCode, injectCodes } from "cppkies/dist/helpers";
import Cppkies from "cppkies"

// I really did not wanna put any here but I kinda had to because of the overwhelming amount of crate-likes I make and probably other mods will make.
export type CrateLike = (Game.Upgrade | Game.HeavenlyUpgrade | Game.Achievement |  AdvancedUpgrade | AdvancedHeavenlyUpgrade | AdvancedAchievement | any )

export interface ExcludeTypes {
	total?: boolean,
	debug?: boolean,
	prestige?: boolean,
	cookie?: boolean,
	other?: boolean,
	shadow?: boolean,
	all?: true
}

export type TagConditional = (boolean | ((me: CrateLike) => boolean));

export let TagConditions: [string, string, TagConditional][] = [];

/**
 * A class that adds a tag to a CrateLike as the name suggests
 * @class
 */
export class TagCondition {
	/**
	 * The name of your tag
	 */
	public name: string;

	/**
	 * The color of your tag. Ex. "#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000", etc. 
	 */
	public color: string;

	/**
	 * A function that should return a boolean on whether this tag should be added to a CrateLike. 
	 * Should also check if the crate has noTags and respect that, unless you need to do that.
	 */
	public tagFunction: TagConditional;

	/**
	 * A class that adds a tag to a CrateLike as the name suggests
	 * @param name The tag's name
	 * @param color The color of your tag
	 * @param tagFunction A function that should return a boolean on whether this tag should be added to a CrateLike
	 */
	constructor(name: string, color: string, tagFunction: TagConditional) {
		this.name = name;
		this.color = color;
		this.tagFunction = tagFunction;
		TagConditions.push([this.name, this.color, this.tagFunction])
	}
}

/**
 * An extended Achievement class that add a few utility features
 * @class 
 */
export class AdvancedAchievement extends Cppkies.Achievement {
	/**
	 * The pool that this achievement is in
	 */
	public pool: any; 

	/**
	 * A function which returns the description of the achievement
	 */
	public descFunc: () => string;

	/**
	 * A function which returns the icon of the achievement
	 */
	public iconFunction: () => Game.Icon;

	/**
	 * The groups to exclude this achievement from 
	 */
	public exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	public noTags: boolean;

	/**
	 * Can you use neuromancy with this achievement? 
	 */
	public noNeuromancy: boolean;

	/**
	 * Creates a achievement with a few utility features.
	 * @param name The name of the achievement
	 * @param desc The description of it
	 * @param icon The icon for it
	 */
	constructor(name: string, desc: string, icon: Game.Icon) {
		super(name, desc, icon);
	}
}

/**
 * An class to add your own credits to your mod
 * @class 
 */
export class AuthorAchievement extends AdvancedAchievement {	
	/**
	 * Creates an Author Achievement
	 * @param name Your name / The author's name
	 * @param desc A short desciption of what you or the author did 
	 * @param icon An icon that preferably describes yourself / the author
	 */
	constructor(name: string, desc: string, icon: Game.Icon) {
		super(name, desc, icon);
		this.pool = "authors";
		this.exclude = {shadow: true}
		this.won=1;
		this.noTags=true;
		this.noNeuromancy=true;
	}
}
new TagCondition("Author", "#ffffff", (me) => {
	if (me.pool === "authors") {
		return true
	} else {
		return false
	}
})

/**
 * An extended Upgrade class that add a few utility features
 * @class 
 */
export class AdvancedUpgrade extends Cppkies.Upgrade {
	/**
	 * The pool that this upgrade is in
	 */
	public pool: any; 
	/**
	 * The groups to exclude this upgrade from 
	 */
	public exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	public noTags: boolean;
	/**
	 * Can you use neuromancy with this achievement? 
	 */
	public noNeuromancy: boolean;

	/**
	 * Creates a AdvancedUpgrade
	 * @param name The name of your upgrade
	 * @param desc Your upgrade's description
	 * @param price The price of your upgrade
	 * @param icon Your upgrade's icon
	 * @param buyFunc A function that gets called when your upgrade is bought
	 */
	constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, buyFunc?: () => void) {
		super(name, desc, price, icon, buyFunc);
	}
}

/**
 * An extended Heavenly Upgrade class that add a few utility features
 * @class 
 */
export class AdvancedHeavenlyUpgrade extends Cppkies.HeavenlyUpgrade {
	/**
	 * The pool that this heavenly upgrade is in
	 */
	public pool: any; 
	/**
	 * The groups to exclude this heavenly upgrade from 
	 */
	public exclude: ExcludeTypes;
	/**
	 * Remove all tags? Done before calculating tag conditions
	 */
	public noTags: boolean;
	/**
	 * Can you use neuromancy with this upgrade? 
	 */
	public noNeuromancy: boolean;

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
	constructor(name: string, desc: CommonValue<string>, price: CommonValue<number>, icon: CommonValue<Game.Icon>, position: [number, number], parents?: (string | number)[], buyFunc?: () => void) {
		super(name, desc, price, icon, [position[0], position[1]], parents, buyFunc);
	}
}

export interface AdvancedBuffInterface extends Game.Buff{
	timeless?: boolean;
	dismissable?: boolean;
}
export class AdvancedBuff extends Game.buffType {
	public timeless: boolean;
	public dismissable: boolean;

	constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface) {
		super(name, func)
	}
}