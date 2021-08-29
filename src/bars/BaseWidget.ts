export class BaseWidget {
	/**
	 * The widget's named id, used for the various HTML elements create from this.
	 */
	public id: string;

	/**
	 * The widgets icon
	 */
	public icon: Game.Icon;

	/**
	 * The place the widget lies in the window.SkullyCore.BarWidgets.TopBar.Bars array
	 */
	public index: number;

	/**
	 * The function called when the game tries to render your widgets tooltip
	 */
	public tooltip?: () => string;
	/**
	 * The function called when a user tries to click on your widget
	 */
	public onclick?: () => void;
	/**
	 * Called after internal div creation, use this to edit your widget's HTML representation before it gets passed on to the internals
	 */
	public customDiv?: (div: HTMLElement) => HTMLElement;

	/**
	 * This is a refrence to the bar's HTML element in the dom
	 * Useful little snippet to change the icon of the widget: bar.div.children[0].setAttribute("style", SkullyCore.IconToStyle([0,0, ""]))
	 */
	public div?: HTMLElement;

	private _hidden: boolean = false;

	set hidden(state: boolean) {
		this._hidden = state;
		if (typeof this.div !== "undefined") {
			this.div.style.display = state ? "none" : "block";
		}
	}

	get hidden() {
		return this._hidden;
	}
}
