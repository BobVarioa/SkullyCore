import { ExcludeTypes } from "../types";
import Cppkies from "cppkies";

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

