// Todo : find a resonable way for a mod to choose which bar to inject into 
// Todo : handle multiple widgets on the same bar 
// Todo : this one actually needs dom manipulation 
// Todo : toggle, and menu
// Todo : have a option to add all the switches here, maybe. 
// Todo : hide widgets in a similar fashion to vaulting 
// Todo : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
    public onclick?: ()=>string;

    constructor(id: string, icon: Game.Icon, tooltip: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.tooltip = tooltip;
        window.SkullyCore.BarWidgets.TopBar.Bars.push(this)
    }
    
    public getDiv(): string {
        if (typeof this.onclick !== "undefined" && this.onclick.toString().includes("\"")) {
            throw new Error("One of your onclick functions in a TopBarMenuWidget has quote in it, please remove it")
        }
        if (typeof this.tooltip !== "undefined" && this.tooltip.toString().includes("\"")) {
            throw new Error("One of your tooltip functions in a TopBarMenuWidget has quote in it, please remove it")
        }
        window.SkullyCore.BarWidgets.TopBar.currentPos+=48
        return `
        <div class="top_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}" ${typeof this.onclick !== "undefined" ? `onclick="${this.onclick.toString()}"` : ""} onmouseout="Game.tooltip.shouldHide=1;" onmouseover="Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return ${this.tooltip.toString().replace(new RegExp("\""), "'")}();},'bottom');Game.tooltip.wobble();"> 
            <div id="${this.id}Icon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${typeof this.icon[2] !== "undefined"?'background-image:url('+this.icon[2]+');':''}background-position:${-this.icon[0]*48}px ${-this.icon[1]*48}px;"></div>
        </div>
        `;
    }
}

export type BarWidget = (TopBarMenuWidget);