/*
<head>
    <style>
        .top_bar { 
            display:none;
            position:absolute;
            width:32px;
            height:32px;
            position:absolute;
            z-index:10000;
            bottom:-12px;
            z-index:10000;
            cursor:pointer;
            filter:drop-shadow(0px 3px 2px #000);
            -webkit-filter:drop-shadow(0px 3px 2px #000);
        }
    </style>
</head>

<div id="comments" class="inset title">
    <div class="separatorBottom"></div>
    <div id="lumps" onclick="Game.clickLump();" onmouseout="Game.tooltip.shouldHide=1;" onmouseover="
        Game.tooltip.dynamic=1;
        Game.tooltip.draw(this,function(){
            return Game.lumpTooltip();
        },'bottom');
        Game.tooltip.wobble();
    ">
        <div id="lumpsIcon" class="usesIcon" style="background-position: -1152px -672px;"></div>
        <div id="lumpsIcon2" class="usesIcon" style="background-position: -1200px -672px; opacity: 0.36534;"></div>
        <div id="lumpsAmount">62</div>
    </div>


    <insert location="here"> 
        <div class="top_bar" style="left:-Xpx;" id="defined_id" onclick="stuff()" onmouseout="Game.tooltip.shouldHide=1;" onmouseover="
            Game.tooltip.dynamic=1;
            Game.tooltip.draw(this,function(){
                return stuffTooltip();
            },'bottom');
            Game.tooltip.wobble();
        "> 
            <div id="defined_idIcon" class="usesIcon" style="background-position: -Xpx -Xpx;"></div>
        </div>
    </insert>


</div>
*/

export class BarWidget {
    // Todo : find a resonable way for a mod to choose which bar to inject into 
    // Todo : handle multiple widgets on the same bar 
    // Todo : this one actually needs dom manipulation 
    // Todo : toggle, and menu
    // Todo : have a option to add all the switches here, maybe. 
    // Todo : hide widgets in a similar fashion to vaulting 
    // Todo : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
}