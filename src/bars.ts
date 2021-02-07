import { createElementFromString, IconToStyle } from "./helpers";

abstract class BaseWidget {
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
    public tooltip?: ()=>string;
    /**
     * The function called when a user tries to click on your widget
     */
    public onclick?: ()=>void;
    /**
     * Called after internal div creation, use this to edit your widget's HTML representation before it gets passed on to the internals
     */
    public customDiv?: (div: HTMLElement)=>HTMLElement;

    /**
     * This is a refrence to the bar's HTML element in the dom
     * Useful little snippet to change the icon of the widget: bar.div.children[0].setAttribute("style", SkullyCore.IconToStyle([0,0, ""]))
     */
    public div?: HTMLElement;
}
export class TopBarMenuWidget extends BaseWidget {
    constructor(id: string, icon: Game.Icon, tooltip?: ()=>string) {
        super()
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
        if (this.hidden) {
            div.style.display = "none";
        } 
        return div;
    }

    /**
     * Don't mess with this.
     */
    private _hidden: boolean = false;
    
    set hidden(thing: boolean) {
        this._hidden = thing;
        if (typeof this.div !== "undefined") {
            this.div.style.display = thing ? "none" : "block";
            window.SkullyCore.TopBarMenuWidget.reloadPlacement()
        }
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

export class BuildingBarMenuWidget extends BaseWidget {    
    /**
     * The building this widget is attached to.
     */
    public building: string;

    constructor(id: string, icon: Game.Icon, building: string, tooltip?: ()=>string) {
        super()
        this.id = id;
        this.icon = icon;
        this.building = building;
        this.tooltip = tooltip;
        if (typeof window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] === "undefined") {
            window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building] = [];
            window.SkullyCore.BarWidgets.BuildingBar.currentPos[this.building] = -36; 
        }
        this.index = window.SkullyCore.BarWidgets.BuildingBar.Bars[this.building].push(this) - 1;
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
        if (this.hidden) {
            div.style.display = "none";
        } 
        return div;
    }

    private _hidden: boolean = false;

    set hidden(thing: boolean) {
        this._hidden = thing;
        if (typeof this.div !== "undefined") {
            this.div.style.display = thing ? "none" : "block";
            this.reloadPlacement()
        }
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

export type BarWidget = (TopBarMenuWidget | BuildingBarMenuWidget | BaseWidget);
// Todo : hide widgets in a similar fashion to vaulting 

/*
You: Bob, why are the ways you mess with events inconsistent? (e.x. directly setting it, using setAttribute, etc.)
Me: JS (and by extension ts). IS. WEIRD.
*/