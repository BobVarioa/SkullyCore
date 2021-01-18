// Todo : find a resonable way for a mod to choose which bar to inject into 
// Todo : handle multiple widgets on the same bar 
// Todo : this one actually needs dom manipulation 
// Todo : toggle, and menu
// Todo : have a option to add all the switches here, maybe. 
// Todo : hide widgets in a similar fashion to vaulting 
// Todo : aaaaaaaaaaaaaaaaaaaaaaaaaa
export class TopBarMenuWidget {
    public id: string;
    public icon: Game.Icon;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    public tooltip: ()=>string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    public onclick?: ()=>void;

    constructor(id: string, icon: Game.Icon, tooltip?: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.tooltip = tooltip;
        window.SkullyCore.BarWidgets.TopBar.Bars.push(this)
    }
    
    public getDiv(): string {
        if (typeof this.onclick !== "undefined" && this.onclick.toString().includes("\"")) {
            console.warn("One of your onclick functions in a TopBarMenuWidget has double quote in it, please remove it");
            return "";
        }
        if (typeof this.tooltip !== "undefined" && this.tooltip.toString().includes("\"")) {
            console.warn("One of your tooltip functions in a TopBarMenuWidget has double quote in it, please remove it");
            return "";
        }
        window.SkullyCore.BarWidgets.TopBar.currentPos+=48
        return `
        <div class="top_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}TopBarMenu" ${typeof this.onclick !== "undefined" ? `onclick="${"let " + this.id + "TopBarMenuIconOnClick = " + this.onclick.toString().replace("\"", "'") + "();"}"` : ""} ${ typeof this.tooltip !== "undefined" ? `onmouseout="Game.tooltip.shouldHide=1;" onmouseover="Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return ${this.tooltip.toString().replace("\"", "'")}();},'bottom');Game.tooltip.wobble();"` : ""}> 
            <div id="${this.id}TopBarMenuIcon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${typeof this.icon[2] !== "undefined"?'background-image:url('+this.icon[2]+');':''}background-position:${-this.icon[0]*48}px ${-this.icon[1]*48}px;"></div>
        </div>
        `;
    }
}

export class BuildingBarMenuWidget {    
    public id: string;
    public icon: Game.Icon;
    public building: string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    public tooltip: ()=>string;
    /**
     * Note: Please don't use double quotes in this function, there is no good way to fix this without telling you to just not do it
     */
    public onclick?: ()=>void;

    constructor(id: string, icon: Game.Icon, building: string, tooltip?: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.building = building;
        this.tooltip = tooltip;
        if (typeof window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] === "undefined") window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] = [];
        window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building].push(this)
    }
    
    public getDiv(): string {
        if (typeof this.onclick !== "undefined" && this.onclick.toString().includes("\"")) {
            console.warn("One of your onclick functions in a TopBarMenuWidget has double quote in it, please remove it");
            return "";
        }
        if (typeof this.tooltip !== "undefined" && this.tooltip.toString().includes("\"")) {
            console.warn("One of your tooltip functions in a TopBarMenuWidget has double quote in it, please remove it");
            return "";
        }
        if (typeof window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] !== "undefined") {
            window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building]+=48
        } else {
            window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] = 12;
        }
        return `
        <div class="building_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}BuildingBarMenu" ${typeof this.onclick !== "undefined" ? `onclick="${"let " + this.id + "BuildingBarMenuIconOnClick = " + this.onclick.toString().replace("\"", "'") + "();"}"` : ""} ${ typeof this.tooltip !== "undefined" ? `onmouseout="Game.tooltip.shouldHide=1;" onmouseover="Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return ${this.tooltip.toString().replace("\"", "'")}();},'bottom');Game.tooltip.wobble();"` : ""}> 
            <div id="${this.id}BuildingBarMenuIcon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${typeof this.icon[2] !== "undefined"?'background-image:url('+this.icon[2]+');':''}background-position:${-this.icon[0]*48}px ${-this.icon[1]*48}px;"></div>
        </div>
        `;
    }
}

export type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget);