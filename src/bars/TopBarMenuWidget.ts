
import { createElementFromString, IconToStyle } from "../helpers/common";
import { attachTooltip } from "../helpers/tooltip";
import { BaseWidget } from "./BaseWidget";

export class TopBarMenuWidget extends BaseWidget {
	static Bars: TopBarMenuWidget[] = [];

	constructor(id: string, icon: Game.Icon, tooltip?: () => string) {
		super();
		this.id = id;
		this.icon = icon;
		this.tooltip = tooltip;
		this.index = TopBarMenuWidget.Bars.push(this) - 1;
	}

	public getDiv(): HTMLElement {
		let div = createElementFromString(/*html*/ `
        <div 
			class="top_bar"
			id="${this.id}TopBarMenu"
		> 
            <div 
				id="${this.id}TopBarMenuIcon" 
				class="baseIcon ${!this.icon[2] ? "usesIcon" : ""}" 
				style="${IconToStyle(this.icon)}"
			></div>
        </div>`) as HTMLElement;
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
