/**
 * Creates a html object based on a string of valid HTML
 * @param htmlString a string that is valid HTML
 */
 export function createElementFromString(htmlString: string): ChildNode {
	const div = document.createElement("div");
	div.innerHTML = htmlString.trim();
	return div.firstChild;
}

interface ExcludeIsh {
	exclude?: Partial<{
		total: boolean;
		debug: boolean;
		prestige: boolean;
		cookie: boolean;
		other: boolean;
		shadow: boolean;
		all: boolean;
	}>;
}

/**
 *
 * @param type the exclude to check for
 * @param me the crate you are checking
 * @param str2 string
 * @param func the function to call if if matches
 */
export function exclude(type: keyof ExcludeIsh["exclude"], me: ExcludeIsh): boolean {
	if (typeof me?.exclude !== "undefined") {
		if (typeof me?.exclude?.all !== "undefined" && !me.exclude.all) return true;
		if (typeof me?.exclude?.[type] !== "undefined" && !me.exclude[type]) return true;
	}
	return false;
}

/**
 * Returns the style atrribute that an icon should have, usesIcon should be a class that this element should use if icon[2]
 * @param icon An icon
 */
export function IconToStyle(icon: Game.Icon): string {
	return `${
		!(typeof icon[2] === "undefined" || icon[2] === "") ? `background-image: url(${icon[2]});` : ""
	}background-position:${-icon[0] * 48}px ${-icon[1] * 48}px;`;
}
