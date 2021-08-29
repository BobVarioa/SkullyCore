import Cppkies from "cppkies";

import { PrestigePage, RiftUpgrade, PagedHeavenlyUpgrade } from "./rifts";

import { TopBarMenuWidget, BuildingBarMenuWidget } from "./bars";

import { Task } from "./quests";

import { TagCondition } from "./tags";
import { AuthorAchievement } from "./achievement/AuthorAchievement";
import { AdvancedAchievement } from "./achievement";
import { AdvancedUpgrade, AdvancedHeavenlyUpgrade } from "./upgrade";
import { createElementFromString, IconToStyle, exclude } from "./helpers/common";

const SkullyCore = {
	// Base
	AdvancedAchievement,
	AdvancedHeavenlyUpgrade,
	AdvancedUpgrade,
	AuthorAchievement,
	TagCondition,

	// Prestige Pages & Rifts
	PrestigePage,
	RiftUpgrade,
	PagedHeavenlyUpgrade,

	currentPage: "vanilla",
	pages: { vanilla: Game.PrestigeUpgrades } as Record<string, Game.HeavenlyUpgrade[]>,

	// Injecting into bars to add stuff (ex. sugar lumps)
	TopBarMenuWidget,
	BuildingBarMenuWidget,

	// Task Effects (aka. quests), tasks that have a completion req and give a reward when completed
	Task,

	// OnLoad
	onLoad: [] as (() => void)[],

	// Global Helpers
	exclude,
	IconToStyle,
	createElementFromString,
};

declare global {
	interface Window {
		SkullyCore: typeof SkullyCore | undefined;
	}
}
// eslint-disable-next-line import/no-mutable-exports
let SkullyCoreExport: typeof SkullyCore;
if (typeof window.SkullyCore !== "undefined") SkullyCoreExport = window.SkullyCore;
else {
	window.SkullyCore = SkullyCore;
	SkullyCoreExport = SkullyCore;

	Cppkies.onLoad.push(() => {
		const enum InjectCode {
			After = "after",
			Replace = "replace",
			Before = "before",
		}

		// Author Upgrade
		Game.UpdateMenu = Cppkies.injectCodes(Game.UpdateMenu, [
			[
				"for (var i in achievements)",
				'pools.authors = "<b>Authors</b> <small>The people who made the mods you are playing with now!</small>";',
				InjectCode.Before,
			],
		]);

		Game.crate = Cppkies.injectCodes(Game.crate, [
			[
				"if (neuromancy)",
				'if (neuromancy && (typeof me.noNeuromancy !== "undefined" ? !me.noNeuromancy : true))',
				InjectCode.Replace,
			],
		]);

		Game.crateTooltip = Cppkies.injectCodes(Game.crateTooltip, [
			// Tag Logic
			[
				"var tagsStr='';",
				/* javascript*/ `
				if (typeof me.noTags !== "undefined" ? me.noTags : false) tags = []
				if (typeof me.tags !== "undefined") {
					for(let i in me.tags) {
						tags.concat(me.tags[i]);
					}
				}
				if (typeof window.SkullyCore !== "undefined") window.SkullyCore.TagCondition.Conditions.forEach((element) => {
					if (typeof element.tagFunction === "function") {
						if (element.tagFunction(me)) tags.push(element.name, element.color) 
					} else {
						console.warn("Malformed TagCondition")
					}
				})
				`,
				InjectCode.Before,
			],
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

        Redone Later B)
            - Bob
        */

		Game.UpdateMenu = Cppkies.injectCodes(Game.UpdateMenu, [
			// Exclude Total
			[
				"if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') upgradesTotal++;",
				`if (me.pool=='' || me.pool=='cookie' || me.pool=='tech') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("total", me)) upgradesTotal++;
				}`,
				InjectCode.Replace,
			],

			// Exclude Debug - Display
			[
				"if (me.pool=='debug') hiddenUpgrades += str2;",
				`if (me.pool=='debug') { 
					// SkullyCore Inject
					if (window.SkullyCore.exclude("debug", me)) hiddenUpgrades += str2;
				}`,
				InjectCode.Replace,
			],

			// Exclude Prestige - Display & Count
			[
				"if (me.pool=='prestige') {prestigeUpgrades+=str2;prestigeUpgradesTotal++;}",
				`if (me.pool=='prestige') {
               		// SkullyCore Inject
					if (window.SkullyCore.exclude("prestige", me)) {
						prestigeUpgrades += str2;
						prestigeUpgradesTotal++;
					}
				}`,
				InjectCode.Replace,
			],
			[
				"if (me.pool=='prestige') prestigeUpgradesOwned++;",
				`if (me.pool=='prestige') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("prestige", me)) prestigeUpgradesOwned++;
				}`,
				InjectCode.Replace,
			],

			// Exclude Cookie - Display
			[
				"if (me.pool=='cookie') cookieUpgrades+=str2;",
				`if (me.pool=='cookie') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("cookie", me)) cookieUpgrades += str2;
				}`,
				InjectCode.Replace,
			],

			// Exclude Other - Display
			[
				"if (me.pool!='toggle' && me.pool!='unused') upgrades+=str2;",
				`if (me.pool!='toggle' && me.pool!='unused') {
					// SkullyCore Inject
					if (window.SkullyCore.exclude("other", me)) {
						upgrades+=str2;
					}
				}`,
				InjectCode.Replace,
			],

			// Exclude Shadow - Count
			[
				"achievementsOwnedOther++;",
				`if (window.SkullyCore.exclude("shadow", me)) {
					// SkullyCore Inject
					achievementsOwnedOther++;
				}`,
				InjectCode.Replace,
			],
		]);

		Game.BuildAscendTree = Cppkies.injectCodes(Game.BuildAscendTree, [
			[
				"for (var i in Game.PrestigeUpgrades)",
				"for (var i in window.SkullyCore.pages[window.SkullyCore.currentPage])",
				InjectCode.Replace,
			],
			[
				"var str='';",
				"var currentHeavenlyUpgrades = window.SkullyCore.pages[window.SkullyCore.currentPage];\n",
				InjectCode.Before,
			],
			["Game.PrestigeUpgrades", "currentHeavenlyUpgrades", InjectCode.Replace],
		]);

		/*
		Game.tooltip.draw = Cppkies.injectCodes(Game.tooltip.draw, [
            [
				`this.shouldHide=0;`,
				`if (this.stopNewTooltips === true) {`,
				InjectCode.Before
			],
            [
				`this.on=1;`,
				`}`,
				InjectCode.After
			]
        ])
		*/

		document.getElementsByTagName("head")[0].appendChild(
			createElementFromString(/* html*/ `
			<style type="text/css">
				.widget_container {
					display: flex;
					position: absolute;
					bottom: -12px;
					z-index: 10000
				}

				#comments_container {
					/* dirty hack */
					margin-left:  24px;
				}

				.widget_container > div { 
					width: 32px;
					height: 32px;

					position: relative !important;
					bottom: 0px;
					left: 0px !important;

					z-index:10000;
					filter: drop-shadow(0px 3px 2px #000);
					-webkit-filter: drop-shadow(0px 3px 2px #000);
					cursor: pointer;

					margin-left: 4px;
				}
				.widget_container > div:hover {
					bottom: 8px;
				}
		
				.baseIcon {
					width: 48px;
					height: 48px;
					position: absolute;
					left: -8px;
					top: -8px;
				}

				div#lumpsAmount
				{
					position: relative !important;
				}
			</style>`)
		);
		
		SkullyCore.onLoad.forEach((func) => func());

		// TopBars
		const TopBar = l("comments").appendChild(
			createElementFromString(/*html*/ `
				<div id="comments_container" class="widget_container"></div>
			`)
		);

		TopBarMenuWidget.Bars.forEach((bar) => {
			bar.div = TopBar.appendChild(bar.getDiv());
		});

		Game.ObjectsById.forEach((object) => {
			const el = l(`row${object.id}`);
			if (el !== null) {
				const building = el.appendChild(
					createElementFromString(/*html*/ `
						<div id="row${object.id}_container" class="widget_container"></div>
					`)
				);

				const bars = BuildingBarMenuWidget.Bars;
				bars[object.name] ??= [];

				bars[object.name].forEach((bar) => {
					bar.div = building.appendChild(bar.getDiv());
				});
			}
		});

		/*
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
        */

	});

	SkullyCore.onLoad.push(() => {
		new TagCondition("Author", "#ffffff", (me: AdvancedUpgrade) => me.pool === "authors");

		const iconLink =
			"https://raw.githubusercontent.com/MasterOfBob777/SkullyCore/master/static/skullyCoreIcons.png";

		new AuthorAchievement("Orteil & Opti", "The people who made this awesome game!", [17, 5, ""]);
		new AuthorAchievement("TheGLander", "The developer of Cppkies and the CCRepo (W.I.P)", [3, 2, iconLink]);
		new AuthorAchievement("TheSkullyKO", "The ideas guy and artist for SkullyCore and other Skully mods", [
			1,
			0,
			iconLink,
		]);
		const BobCheevo = new AuthorAchievement(
			"Bob",
			"The developer that made this menu for authors and hopefully will work on much more.",
			[2, 2, iconLink]
		);
		// #region Spoliers for tiny minigame, Hide it if you don't want to be spoiled!!!!! (Currenly unavailable tho) I might implement it later
		//*
        
        let BobClicks = 0;

		interface BobLine {
			text: string;
			icon?: Game.Icon;
			func?: () => void ;
		}
        let BobLines: BobLine[] = [
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
            {text: "Oh look! There's a golden cookie, better go click on it not me!", func: () => {
                new Game.shimmer("golden").force="blab"; 
            }},
            {text: "Hah that's what you get for clicking on me!"},
            {text: "Wait that wasn't a wrath cookie, just a harmless blab! Grrrrr, I'll get you next time!"},
            {text: "For a reward, I'll go away for now, but I'll be back!", func: () => {
                Game.RemoveAchiev("Bob")
                setTimeout(() => {
                    Game.Achievements["Bob"].won=1;
                    BobClicks++;
                }, 10000)
            }},
            {text: "Okay, I'm Back."},
            {text: "To be continued..... "}
        ]
        BobCheevo.clickFunction = () => {
			if (BobClicks !== BobLines.length) BobClicks++;
        }
        BobCheevo.descFunc = () => {
            if (typeof BobLines[BobClicks].func !== "undefined") {
                BobLines[BobClicks].func();
            }
            return BobLines[BobClicks].text
        }

        BobCheevo.iconFunction = () => {
            return BobLines[BobClicks]?.icon ?? [0, 2, iconLink]
        }
        //*/
		// #endregion
		console.log("SkullyCore Loaded!");

		/* Examples
		const testPage = new SkullyCore.PrestigePage("Test", "test", ["Legacy"]);
		new SkullyCore.PagedHeavenlyUpgrade(
			"test",
			"test",
			0,
			[-30, 70],
			testPage.id,
			[0, 0],
			[testPage.VanillaRift.id]
		);

		new SkullyCore.TopBarMenuWidget("test", [0, 0], () => "test").onclick = () => {
			console.log("Test");
		};

		const test_icon = new SkullyCore.TopBarMenuWidget("test_icon", [0, 0], () => "test_icon");
		test_icon.onclick = function arrow() {
			console.log("test_icon");
			this.div.children[0].setAttribute("style", IconToStyle([0, 1]));
		};

		new SkullyCore.BuildingBarMenuWidget("test2", [0, 0], "Grandma", () => "test2").onclick = () => {
			console.log("Test2");
		};
		//*/
	});
}

export default SkullyCoreExport;
