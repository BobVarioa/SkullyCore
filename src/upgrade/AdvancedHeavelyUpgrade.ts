import { CommonValue } from "cppkies/dist/helpers";
import { ExcludeTypes } from "../types";
import Cppkies from "cppkies"

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
	constructor(
		name: string,
		desc: CommonValue<string>,
		price: CommonValue<number>,
		icon: CommonValue<Game.Icon>,
		position: [number, number],
		parents?: (string | number)[],
		buyFunc?: () => void
	) {
		super(name, desc, price, icon, [position[0], position[1]], parents, buyFunc);
	}
}