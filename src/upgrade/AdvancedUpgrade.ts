import Cppkies from "cppkies"
import { CommonValue } from "cppkies/dist/helpers";
import { ExcludeTypes } from "../types";

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
	constructor(
		name: string,
		desc: CommonValue<string>,
		price: CommonValue<number>,
		icon: CommonValue<Game.Icon>,
		buyFunc?: () => void
	) {
		super(name, desc, price, icon, buyFunc);
	}
}
