import { AdvancedAchievement } from "./AdvancedAchievement";

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
		this.exclude = { shadow: true };
		this.won = 1;
		this.noTags = true;
		this.noNeuromancy = true;
	}
}