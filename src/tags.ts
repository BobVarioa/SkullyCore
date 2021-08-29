import { Upgrade } from "cppkies/dist/upgrade";

/**
 * A class that adds a tag to a CrateLike as the name suggests
 * @class
 */
export class TagCondition {
	public static Conditions: TagCondition[] = [];

	/**
	 * A class that adds a tag to a CrateLike as the name suggests
	 * @param name The tag's name
	 * @param color The color of your tag
	 * @param tagFunction A function that should return a boolean on whether this tag should be added to a CrateLike
	 */
	constructor(
		/**
		 * The name of your tag
		 */
		public name: string, 

		/**
		 * The color of your tag. Ex. "#ff0000", "#00ff00", "#0000ff", "#ffffff", "#000000", etc.
		 */
		public color: string, 
		
		/**
		 * A function that should return a boolean on whether this tag should be added to a CrateLike.
		 * Should also check if the crate has noTags and respect that, unless you need to do that.
		 * 
		 * @param me an Upgrade
		 */
		public tagFunction: (me: any) => boolean
	) {
		TagCondition.Conditions.push(this);
	}
}
