import { createElementFromString, IconToStyle } from "./helpers";

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

    public index: number;

    /**
     * The
     */
    public tooltip?: ()=>string;
    public onclick?: ()=>void;
    public customDiv?: (div: HTMLElement)=>HTMLElement;

    //bar.div.children[0].setAttribute("style", IconToStyle([0,0, ""])) - to change icon of the widget
    public div?: HTMLElement;

    constructor(id: string, icon: Game.Icon, tooltip?: ()=>string) {
        this.id = id;
        this.icon = icon;
        this.tooltip = tooltip;
        this.index = window.SkullyCore.BarWidgets.TopBar.Bars.push(this) - 1;
    }
    
    public getDiv(): HTMLElement {
        window.SkullyCore.BarWidgets.TopBar.currentPos += 48;
        let div = createElementFromString(`
        <div class="top_bar" style="left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;" id="${this.id}TopBarMenu"> 
            <div id="${this.id}TopBarMenuIcon" class="baseIcon ${typeof this.icon[2] !== "undefined"?'':'usesIcon'}" style="${IconToStyle(this.icon)}"></div>
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
        if (typeof this.customDiv !== "undefined") {
            div = this.customDiv(div)
        }
        return div;
    }

    private _hidden: boolean = false;
    
    set hidden(thing: boolean) {
        this._hidden = thing;
        this.div.hidden = thing;
        window.SkullyCore.TopBarMenuWidget.reloadPlacement()
    }

    get hidden() {
        return this._hidden;
    }

    static reloadPlacement(){
        window.SkullyCore.BarWidgets.TopBar.currentPos = 12
        for (let bar of window.SkullyCore.BarWidgets.TopBar.Bars) {
            if(bar.hidden === true) continue;
            window.SkullyCore.BarWidgets.TopBar.currentPos += 48;
            bar.div.removeAttribute("style")
            bar.div.setAttribute("style", `left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;`)
        }
    }
}

export class BuildingBarMenuWidget {    
    public id: string;
    public icon: Game.Icon;
    public building: string;

    public tooltip?: ()=>string;
    public onclick?: ()=>void;
    public customDiv?: (div: HTMLElement)=>HTMLElement;

    public div?: HTMLElement;

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
        let div = createElementFromString(`
        <div class="building_bar" style="left:${window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building]}px;" id="${this.id}BuildingBarMenu"> 
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
        if (typeof this.customDiv !== "undefined") {
            div = this.customDiv(div)
        }
        return div;
    }

    private _hidden: boolean = false;

    set hidden(thing: boolean) {
        this._hidden = thing;
        this.div.hidden = thing;
        this.reloadPlacement()
    }

    get hidden() {
        return this._hidden;
    }

    public reloadPlacement(){
        window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] = -36;
        for (let bar of window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building]) {
            if(bar.hidden === true) continue;
            window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] += 48;
            bar.div.removeAttribute("style")
            bar.div.setAttribute("style", `left:${window.SkullyCore.BarWidgets.TopBar.currentPos}px;`)
        }
    }
}

export type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget);
// Todo : hide widgets in a similar fashion to vaulting 

/*
You: Bob, why are the ways you mess with events inconsistent? (e.x. directly setting it, using setAttribute, etc.)
Me: JS (and by extension ts). IS. WEIRD.
*/