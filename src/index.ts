import Cppkies from "cppkies"
import SkullyCore from "./export";

Cppkies.onLoad.push(() => {
    // Author Upgrade
    Game.UpdateMenu = Cppkies.injectCodes(Game.UpdateMenu, [
        [`for (var i in achievements)`, `pools.authors = "<b>Authors</b> <small>The people who made the mods you are playing with now!</small>";`, "before"],
    ]);

    Game.crate = Cppkies.injectCodes(Game.crate, [
        [`if (neuromancy)`, `if (neuromancy && (typeof me.noNeuromancy !== "undefined" ? !me.noNeuromancy : true))`, "replace"]
    ])

    Game.crateTooltip = Cppkies.injectCodes(Game.crateTooltip, [
        // Tag Logic
        [`var tagsStr='';`, `
        if (typeof me.noTags !== "undefined" ? me.noTags : false) tags = []
        if (typeof me.tags !== "undefined") {
            for(let i in me.tags) {
                tags.concat(me.tags[i]);
            }
        }
        if (typeof window.SkullyCore !== "undefined") window.SkullyCore.TagConditions.forEach((element) => {
            if(typeof element[2] === "function") {
                if(element[2](me)) tags.push(element[0], element[1]) 
            } else if (typeof element[2] === "boolean") {
                if(element[2]) tags.push(element[0], element[1])
            } else {
                console.warn("Malformed TagCondition")
            }
        })
        `, "before"]
    ]);
    /*
    Note for anyone reading this I don't use the in operator because apparently it is rather slow. While I myself have not done any tests I did this just to be safe.
    Plus while it would be a bit more readable, It wouldn't make much of a difference since it would look something like this:
    if ((native.code === true) && ("exclude" in me ? "total" in me.exclude ? !me.exclude.total : true : true)) { // True in this case is treated as an "ignore me"
        //actual code
    }
    Rather then this :
    if ((native.code === true) && (typeof me.exclude === "undefined" ? true : typeof me.exclude.total === "undefined"  ? true : !me.exclude.total)) {
        //actual code
    }
    So a bit of a difference but not much, as I said.

    Another thing I noticed opon writing this is I could've used nested if statements instead of nested ternary operators but... uhh I probabaly should've done that but.... I don't want to redo my code now.
    I might redo it later though.
    
        - Bob
    */
    Game.UpdateMenu = Cppkies.injectCodes(Game.UpdateMenu, [
        // Exclude Total
        [`if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') upgradesTotal++;`, `if ((me.pool=='' || me.pool=='cookie' || me.pool=='tech' ) && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.total === "undefined"  ? true : !me.exclude.total) || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) upgradesTotal++;`, "replace"],
        
        // Exclude Debug - Display
        [ `if (me.pool=='debug') hiddenUpgrades+=str2;`, `if ((me.pool=='debug') && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.debug === "undefined"  ? true : !me.exclude.debug ) || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) {
            hiddenUpgrades+=str2;
        }`, "replace"],

        // Exclude Prestige - Display & Count
        [`else if (me.pool=='prestige') {prestigeUpgrades+=str2;prestigeUpgradesTotal++;}`, `else if ((me.pool=='prestige') && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.prestige === "undefined"  ? true : !me.exclude.prestige)  || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) {
            prestigeUpgrades+=str2;
            prestigeUpgradesTotal++;
        }`, "replace"],
        [`else if (me.pool=='prestige') prestigeUpgradesOwned++;`, `else if ((me.pool=='prestige') && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.prestige === "undefined"  ? true : !me.exclude.prestige)  || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) {
            prestigeUpgradesOwned++;
        }`, "replace"],

        // Exclude Cookie - Display
        [`else if (me.pool=='cookie') cookieUpgrades+=str2;`, `\nelse if ((me.pool=='cookie') && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.cookie === "undefined"  ? true : !me.exclude.cookie) || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) {
            cookieUpgrades+=str2;
        }`, "replace"],

        // Exclude Other - Display
        [ `else if (me.pool!='toggle' && me.pool!='unused') upgrades+=str2;`, `\nelse if ((me.pool!='toggle' && me.pool!='unused') && ((typeof me.exclude === "undefined" ? true : typeof me.exclude.other === "undefined"  ? true : !me.exclude.other)  || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all))) {
            upgrades+=str2;
        }`, "replace"],

        // Exclude Shadow - Count
        [`achievementsOwnedOther++;`, ` if ((typeof me.exclude === "undefined" ? true : typeof me.exclude.shadow === "undefined"  ? true : !me.exclude.shadow)  || (typeof me.exclude === "undefined" ? true : typeof me.exclude.all === "undefined"  ? false : !me.exclude.all)) `, "before"],
    
        /*
        // Log Excludes
        [`var me=list[i];`, `
        if(typeof me.exclude !== "undefined" ? me.exclude !== {} : false) {
            console.log("Types : " + JSON.stringify(me.exclude) + "\\nexclude : " + JSON.stringify(me));
        }`, "after"]
        */
    ])

    Game.BuildAscendTree = Cppkies.injectCodes(Game.BuildAscendTree, [
        [`for (var i in Game.PrestigeUpgrades)`, `for (var i in window.SkullyCore.pages[window.SkullyCore.currentPage])`, "replace"],
        [`var str='';`, `var currentHeavenlyUpgrades = window.SkullyCore.pages[window.SkullyCore.currentPage];\n`, "before"], 
        [`Game.PrestigeUpgrades`, `currentHeavenlyUpgrades`, "replace"]
    ])

    document.getElementsByTagName("head")[0].innerHTML += `
    <style type="text/css">
        .top_bar { 
            width:32px;
            height:32px;
            position:absolute;
            bottom:-12px;
            z-index:10000;
            filter:drop-shadow(0px 3px 2px #000);
            -webkit-filter:drop-shadow(0px 3px 2px #000);
        }
        .top_bar:hover {
            bottom:-10px
        }

        .building_bar { 
            width:32px;
            height:32px;
            position:absolute;
            bottom:-12px;
            z-index:10000;
            filter:drop-shadow(0px 3px 2px #000);
            -webkit-filter:drop-shadow(0px 3px 2px #000);
        }

        .building_bar:hover {
            bottom:-10px
        }

        .baseIcon {
            width:48px;
            height:48px;
            position:absolute;
            left:-8px;
            top:-8px;
        }
    </style>
    `;
    
    let BarsCreated = false;
    SkullyCore.onLoad.forEach((element) => {
        element()
    });

    function createElementFromHTML(htmlString) {
        var div = document.createElement('div');
        div.innerHTML = htmlString.trim();
        return div.firstChild; 
    }
    // TopBars
    let TopBar = l("comments")
    SkullyCore.BarWidgets.TopBar.Bars.forEach((value) => {
        TopBar.appendChild(createElementFromHTML(value.getDiv()));
        BarsCreated = true;
    })

    Game.ObjectsById.forEach((object) => {
        let building = l("row" + object.id);
        //@ts-ignore
        if(building !== null) {
            if (typeof SkullyCore.BarWidgets.BuildingBar.Bars[object.name] === "undefined") SkullyCore.BarWidgets.BuildingBar.Bars[object.name] = []
            SkullyCore.BarWidgets.BuildingBar.Bars[object.name].forEach((bar) => {
                building.appendChild(createElementFromHTML(bar.getDiv()));
                BarsCreated = true;
            })
        }
    })

    if(BarsCreated) {
        l("prefsButton").setAttribute("onclick","Game.ShowMenu('prefs');")
        l("statsButton").setAttribute("onclick","Game.ShowMenu('stats');")
        l("logButton").setAttribute("onclick","Game.ShowMenu('log');")
        l("legacyButton").setAttribute("onclick","PlaySound('snd/tick.mp3');Game.Ascend();")
    }

    Cppkies.on("check", () => {
        if(typeof SkullyCore.ActiveTasks !== "undefined" && SkullyCore.ActiveTasks.length !== 0) {
            SkullyCore.ActiveTasks.forEach((value, index) => {
                if (value.check()) {
                    value.finish();
                    delete SkullyCore.ActiveTasks[index];
                }
            });
        } 
    })
})

SkullyCore.onLoad.push(()=>{
    let iconLink = "https://raw.githubusercontent.com/MasterOfBob777/SkullyCore/master/static/skullyCoreIcons.png";
    new SkullyCore.AuthorAchievement("Orteil & Opti", "The people who made this awesome game!", [17, 5, ""])
	new SkullyCore.AuthorAchievement("TheGLander", "The developer of Cppkies and the CCRepo (W.I.P) ", [3, 2, iconLink])
	new SkullyCore.AuthorAchievement("TheSkullyKO", "The ideas guy and artist for SkullyCore and other Skully mods", [1, 0, iconLink])
    let BobCheevo = new SkullyCore.AuthorAchievement("Bob", "The developer that made this menu for authors and hopefully will work on much more.", [2, 2, iconLink])
    //#region Spoliers for tiny minigame, Hide it if you don't want to be spolied!!!!! (Currenly unavailable tho) I might implement it later
    /*
    declare global {
	    interface Window {
		    BobClicks: number | undefined
	    }
    }
    window.BobClicks = 0;
    
    let BobLines: {text: string, icon?: Game.Icon, func?: ()=>void }[] = [
        {text: "The developer that made this menu for authors and hopefully will work on much more."},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "You can stop clicking on me now. There's not an achievement or anything, there's not bcps (Bob Clicks per Second), there's really nothing too interesting."},
        {text: "Like I'm serious there's nothing execept these words."},
        {text: "..."},
        {text: "....."},
        {text: "......."},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Hi!"},
        {text: "Wow, you're still here. Usually those two tricks work. "},
        {text: "Well there's nothing else."},
        {text: "I mean you can keep clicking on me."},
        {text: "But it's ultimately a waste of your time."},
        {text: "Oh look! There's a golden cookie, better go click on it not me!", func:() => {
            new Game.shimmer("golden").force="blab"; // This is in the actual game just the wrong case is used in the types I guess
        }},
        {text: "Hah that's what you get for clicking on me!"},
        {text: "Wait that wasn't a wrath cookie, just a harmless blab! Grrrrr, I'll get you next time!"},
        {text: "For a reward, I'll go away for now, but I'll be back!", func: () => {
            Game.RemoveAchiev("Bob")
            setTimeout(() => {
                Game.Achievements["Bob"].won=1;
                window.BobClicks++;
            })
        }},
        {text: "Okay, I'm Back."},
        {text: "To be continued..... "}
    ]
	BobCheevo.clickFunction = () => {
        window.BobClicks++;
    }
    BobCheevo.descFunc = () => {
        if (typeof BobLines[window.BobClicks].func !== "undefined") {
            BobLines[window.BobClicks].func();
        }
        return BobLines[window.BobClicks].text
    }

    BobCheevo.iconFunction = () => {
        return typeof BobLines[window.BobClicks].icon !== "undefined" ? BobLines[window.BobClicks].icon : [0, 2]
    }
    */
    //#endregion
    console.log("SkullyCore Loaded!")
    
    /* Examples 
    let testPage = new SkullyCore.PrestigePage("Test", "test", ["Legacy"])
    new SkullyCore.PagedHeavenlyUpgrade("test", "test", 0, [-30, 70], testPage.id, [0, 0], [testPage.VanillaRift.id])

    new SkullyCore.TopBarMenuWidget("test", [0, 0], ()=>{
        return 'test'
    }).onclick=()=>{
        console.log('Test')
    }
    new SkullyCore.BuildingBarMenuWidget("test2", [0, 0], "Grandma", ()=>{
        return 'test2'
    }).onclick=()=>{
        console.log('Test2')
    }
    */
})