import { AdvancedBuff, AdvancedBuffInterface } from "./buff/AdvancedBuff";

export class Task extends AdvancedBuff {
	// Todo : hide buff timer and make it eternal, optional to enable the timer and have a time limit
	// Todo : allow the user to dismiss task if dismissable is set to true or has open sesame

	// Todo : Add buff dismissal to user when open sesame is enabled for all buffs
	public check: () => boolean;
	public finish: () => boolean;

	constructor(
		name: string,
		func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface,
		check: () => boolean,
		finish: () => boolean
	) {
		super(name, func);
	}
}
/*
name 
desc
icon 
check 
finish
*/
