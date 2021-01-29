/**
 * Creates a html object based on a string of valid HTML
 * @param htmlString a string that is valid HTML
 */
export function createElementFromString(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}

/**
 * 
 * @param type the exclude to check for
 * @param me the crate you are checking
 * @param str2 string
 * @param func the function to call if if matches
 */
export function exclude(type: ("total" | "debug" | "prestige" | "cookie" | "other" | "shadow"), me: any) {
    if (typeof me.exclude !== "undefined") {
        if (typeof me.exclude.all !== "undefined") {
            if (!me.exclude.all) {
                return true
            }
        }
        switch (type) {
            case "total":
                if (typeof me.exclude.total !== "undefined") {
                    if (!me.exclude.total) {
                        return true
                    }
                }
                break;
            case "debug":
                if (typeof me.exclude.debug !== "undefined") {
                    if (!me.exclude.total) {
                        return true
                    }
                }
                break;
            case "prestige":
                if (typeof me.exclude.total !== "undefined") {
                    if (!me.exclude.total) {
                        return true
                    }
                }
                break;
            case "cookie":
                if (typeof me.exclude.cookie !== "undefined") {
                    if (!me.exclude.cookie) {
                        return true
                    }
                }
                break;
            case "other": 
                if (typeof me.exclude.other !== "undefined") {
                    if (!me.exclude.other) {
                        return true
                    }
                }
                break;
            case "shadow": 
                if (typeof me.exclude.shadow !== "undefined") {
                    if (!me.exclude.shadow) {
                        return true
                    }
                }
                break;
        }
    } else {
        return true
    }
    return false
}

/**
 * Returns the style atrribute that an icon should have, usesIcon should be a class that this element should use if icon[2]
 * @param icon An icon
 */
export function IconToStyle(icon: Game.Icon) {
    return `${(typeof icon[2] !== "undefined"? (icon[2] === "" ? false : true) : false)?'background-image:url('+icon[2]+');':''}background-position:${-icon[0]*48}px ${-icon[1]*48}px;`
}