export interface AdvancedBuffInterface extends Game.Buff {
	timeless?: boolean;
	dismissable?: boolean;
}

export class AdvancedBuff extends Game.buffType {
	public timeless: boolean;

	public dismissable: boolean;

	constructor(
		name: string,
		func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface
	) {
		super(name, func);
	}
}