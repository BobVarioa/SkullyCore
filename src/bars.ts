import { createElementFromHTML } from "./helpers";

/**
 * Top
 */
export class TopBarMenuWidget {
    /**
     * The widget's id
     */
    public id: string;

    /**
     * The widgets icon
     */
    public icon: Game.Icon;

    /**
     * The
     */
    public tooltip: ()=>string;
    public onclick?: ()=>void;

    constructor(id: string, icon: Game.Icon, tooltip?: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.tooltip = tooltip;
        window.SkullyCore.BarWidgets.TopBar.Bars.push(this)
    }
    
    public getDiv(): HTMLElement {
        window.SkullyCore.BarWidgets.TopBar.currentPos += 48;
        let div = createElementFromHTML(`
        <div class="top_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}TopBarMenu"> 
            <div id="${this.id}TopBarMenuIcon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${typeof this.icon[2] !== "undefined"?'background-image:url('+this.icon[2]+');':''}background-position:${-this.icon[0]*48}px ${-this.icon[1]*48}px;"></div>
        </div>`) as HTMLElement
        if (typeof this.onclick !== "undefined") {
            div.onclick = this.onclick
        }
        if (typeof this.tooltip !== "undefined") {
            div.onmouseout = ()=>{
                Game.tooltip.shouldHide=1;
            }
            div.setAttribute("onmouseover", `let ${this.id}TopBarMenuTooltip = ${this.tooltip.toString()};Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return ${this.id}TopBarMenuTooltip();},'bottom');Game.tooltip.wobble();`);            
        }
        return div;
    }
}

export class BuildingBarMenuWidget {    
    public id: string;
    public icon: Game.Icon;
    public building: string;

    public tooltip: ()=>string;
    public onclick?: ()=>void;

    constructor(id: string, icon: Game.Icon, building: string, tooltip?: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.building = building;
        this.tooltip = tooltip;
        if (typeof window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] === "undefined") {
            window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] = [];
            window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] = -36; 
        }
        window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building].push(this)
    }
    
    public getDiv(): HTMLElement {
        window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building]+=48;
        let div = createElementFromHTML(`
        <div class="building_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}BuildingBarMenu"> 
            <div id="${this.id}BuildingBarMenuIcon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${typeof this.icon[2] !== "undefined"?'background-image:url('+this.icon[2]+');':''}background-position:${-this.icon[0]*48}px ${-this.icon[1]*48}px;"></div>
        </div>`) as HTMLElement
        if (typeof this.onclick !== "undefined") {
            div.onclick = this.onclick
        }
        if (typeof this.tooltip !== "undefined") {
            div.onmouseout = ()=>{
                Game.tooltip.shouldHide=1;
            }
            div.setAttribute("onmouseover", `let ${this.id}BuildingBarMenuTooltip = ${this.tooltip.toString()};Game.tooltip.dynamic=1;Game.tooltip.draw(this,function(){return ${this.id}BuildingBarMenuTooltip();},'bottom');Game.tooltip.wobble();`);
        }
        return div;
    }
}

export type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget);
// Todo : hide widgets in a similar fashion to vaulting 

/*
You: Bob, why are the ways you define events inconsistent? (e.x. directly setting it, using setAttribute, etc.)
Me: JS (and by extension ts). IS. WEIRD.
*/