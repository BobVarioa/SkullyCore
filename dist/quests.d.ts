import { AdvancedBuff, AdvancedBuffInterface } from "./core";
export declare class Task extends AdvancedBuff {
    check: () => boolean;
    finish: () => boolean;
    constructor(name: string, func: (time: number, arg1?: number, arg2?: number, arg3?: number) => AdvancedBuffInterface, check: () => boolean, finish: () => boolean);
}
