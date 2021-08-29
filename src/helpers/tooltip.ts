export function attachTooltip(div: HTMLElement, tooltip: () => string) {
	div.addEventListener("mouseout", () => {
		Game.tooltip.shouldHide = 1;
	});
	div.addEventListener("mouseover", function arrow() {
		Game.tooltip.dynamic = 1;
		Game.tooltip.draw(
			this,
			tooltip,
			"bottom"
		);
		Game.tooltip.wobble();
	});
}