
import { createElementFromString, IconToStyle } from "../helpers/common";
import { attachTooltip } from "../helpers/tooltip";
import { BaseWidget } from "./BaseWidget";

export class BuildingBarMenuWidget extends BaseWidget {
	static Bars: Record<string, BuildingBarMenuWidget[]> = {};

	/**
	 * The building this widget is attached to.
	 */
	public building: string;

	constructor(id: string, icon: Game.Icon, building: string, tooltip?: () => string) {
		super();
		this.id = id;
		this.icon = icon;
		this.building = building;
		this.tooltip = tooltip;
		const bars =BuildingBarMenuWidget.Bars
		bars[this.building] ??= []
		this.index = bars[this.building].push(this) - 1;
	}

	public getDiv(): HTMLElement {
		let div = createElementFromString(/*html*/ `
			<div 
				class="building_bar" 
				id="${this.id}BuildingBarMenu"
			> 
				<div 
					id="${this.id}BuildingBarMenuIcon" 
					class="baseIcon ${!this.icon[2] ? "usesIcon" : ""}" 
					style="${IconToStyle(this.icon)}"
				></div>
			</div>
		`) as HTMLElement;
		if (typeof this.onclick !== "undefined") {
			div.addEventListener("click", this.onclick.bind(this));
		}
		if (typeof this.tooltip !== "undefined") {
			attachTooltip(div, this.tooltip);
		}
		if (typeof this.customDiv !== "undefined") {
			div = this.customDiv(div);
		}
		if (this.hidden) {
			div.style.display = "none";
		}
		return div;
	}
}
