//test
var gameLoopIntervalId;
var Marathon = 0;
var Marathon2 = 0;
var auto = false;
var autoS = true;
var shiftDown = false;
var controlDown = false;
var justImported = false;
var saved = 0;
var painTimer = 0;
var keySequence = 0;
var failureCount = 0;
var implosionCheck = 0;
var TIER_NAMES = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];
var DISPLAY_NAMES = [ null, "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth" ];
var forceHardReset = false;
var player = {
    money: new Decimal(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000),
    tickSpeedCost: new Decimal(1000),
    tickspeed: new Decimal(100),
    firstCost: new Decimal(10),
    secondCost: new Decimal(100),
    thirdCost: new Decimal(10000),
    fourthCost: new Decimal(1000000),
    fifthCost: new Decimal(1e9),
    sixthCost: new Decimal(1e13),
    seventhCost: new Decimal(1e18),
    eightCost: new Decimal(1e24),
    firstAmount: new Decimal(0),
    secondAmount: new Decimal(0),
    thirdAmount: new Decimal(0),
    fourthAmount: new Decimal(0),
    firstBought: 0,
    secondBought: 0,
    thirdBought: 0,
    fourthBought: 0,
    fifthAmount: new Decimal(0),
    sixthAmount: new Decimal(0),
    seventhAmount: new Decimal(0),
    eightAmount: new Decimal(0),
    fifthBought: 0,
    sixthBought: 0,
    seventhBought: 0,
    eightBought: 0,
    firstPow: new Decimal(1),
    secondPow: new Decimal(1),
    thirdPow: new Decimal(1),
    fourthPow: new Decimal(1),
    fifthPow: new Decimal(1),
    sixthPow: new Decimal(1),
    seventhPow: new Decimal(1),
    eightPow: new Decimal(1),
    sacrificed: new Decimal(0),
    achievements: [],
    infinityUpgrades: [],
    challenges: [],
    currentChallenge: "",
    infinityPoints: new Decimal(0),
    infinitied: 0,
    infinitiedBank: 0,
    totalTimePlayed: 0,
    bestInfinityTime: 9999999999,
    thisInfinityTime: 0,
    resets: 0,
    galaxies: new Decimal(10),
    tickDecrease: 0.9,
    totalmoney: new Decimal(0),
    achPow: 1,
    newsArray: [],
    interval: null,
    lastUpdate: new Date().getTime(),
    autobuyers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
    tickspeedMultiplier: new Decimal(10),
    chall2Pow: 1,
    chall3Pow: new Decimal(0.01),
    matter: new Decimal(0),
    chall11Pow: new Decimal(1),
    partInfinityPoint: 0,
    partInfinitied: 0,
    break: false,
    challengeTimes: [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31],
    infchallengeTimes: [600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31, 600*60*24*31],
    lastTenRuns: [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]],
    lastTenEternities: [[600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1], [600*60*24*31, 1]],
    infMult: new Decimal(1),
    infMultCost: new Decimal(10),
    tickSpeedMultDecrease: 10,
    tickSpeedMultDecreaseCost: 3e6,
    dimensionMultDecrease: 10,
    dimensionMultDecreaseCost: 1e8,
    overXGalaxies: 10,
    version: 10,
    infDimensionsUnlocked: [false, false, false, false, false, false, false, false],
    infinityPower: new Decimal(1),
    spreadingCancer: 0,
    postChallUnlocked: 0,
    postC4Tier: 0,
    postC3Reward: new Decimal(1),
    eternityPoints: new Decimal(0),
    eternities: 0,
    thisEternity: 0,
    bestEternity: 9999999999,
    eternityUpgrades: [],
    epmult: new Decimal(1),
    epmultCost: new Decimal(500),
    infinityDimension1 : {
        cost: new Decimal(1e8),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension2 : {
        cost: new Decimal(1e9),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension3 : {
        cost: new Decimal(1e10),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension4 : {
        cost: new Decimal(1e20),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension5 : {
        cost: new Decimal(1e140),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension6 : {
        cost: new Decimal(1e200),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension7 : {
        cost: new Decimal(1e250),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infinityDimension8 : {
        cost: new Decimal(1e280),
        amount: new Decimal(0),
        bought: 0,
        power: new Decimal(1),
        baseAmount: 0
    },
    infDimBuyers: [false, false, false, false, false, false, false, false],
    timeShards: new Decimal(0),
    tickThreshold: new Decimal(1),
    totalTickGained: 0,
    timeDimension1: {
        cost: new Decimal(1),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension2: {
        cost: new Decimal(5),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension3: {
        cost: new Decimal(100),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension4: {
        cost: new Decimal(1000),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension5: {
        cost: new Decimal("1e2350"),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension6: {
        cost: new Decimal("1e2650"),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension7: {
        cost: new Decimal("1e3000"),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    timeDimension8: {
        cost: new Decimal("1e3350"),
        amount: new Decimal(0),
        power: new Decimal(1),
        bought: 0
    },
    offlineProd: 0,
    offlineProdCost: 1e7,
    challengeTarget: 0,
    autoSacrifice: 1,
    replicanti: {
        amount: new Decimal(0),
        unl: false,
        chance: 0.01,
        chanceCost: new Decimal(1e150),
        interval: 1000,
        intervalCost: new Decimal(1e140),
        gal: 0,
        galaxies: 0,
        galCost: new Decimal(1e170),
        auto: [false, false, false]
    },
    timestudy: {
        theorem: 0,
        amcost: new Decimal("1e20000"),
        ipcost: new Decimal(1),
        epcost: new Decimal(1),
        studies: [],
    },
    eternityChalls: {},
    eternityChallGoal: new Decimal(Number.MAX_VALUE),
    currentEternityChall: "",
    eternityChallUnlocked: 0,
    etercreq: 0,
    autoIP: new Decimal(0),
    autoTime: 1e300,
    infMultBuyer: false,
    autoCrunchMode: "amount",
    respec: false,
    eternityBuyer: {
        limit: new Decimal(0),
        isOn: false
    },
    eterc8ids: 50,
    eterc8repl: 40,
    dimlife: true,
    dead: true,
    dilation: {
        studies: [],
        active: false,
        tachyonParticles: new Decimal(0),
        dilatedTime: new Decimal(0),
        totalTachyonParticles: new Decimal(0),
        nextThreshold: new Decimal(1000),
        freeGalaxies: 0,
        upgrades: [],
        rebuyables: {
            1: 0,
            2: 0,
            3: 0,
        }
    },
    why: 0,
    options: {
        newsHidden: false,
        notation: "Mixed scientific",
        //Standard = normal prefixed numbers, Scientific = standard form, Engineering = powers of 3.
        scientific: false,
        challConf: false,
        sacrificeConfirmation: true,
        retryChallenge: false,
        bulkOn: true,
        cloud: true,
        hotkeys: true,
        theme: undefined,
        secretThemeKey: 0,
        eternityconfirm: true,
        commas: true,
        updateRate: 50,
        chart: {
            updateRate: 1000,
            duration: 10,
            warning: 0,
        },
        animations: {
            floatingText: true,
            bigCrunch: true,
            eternity: true,
            tachyonParticles: true,
        }
    }

};


var defaultStart = $.extend(true, {}, player);





function setTheme(name) {
    document.querySelectorAll("link").forEach( function(e) {
        if (e.href.includes("theme")) e.remove();
    });

    if(name !== undefined && name.length < 3) giveAchievement("Shhh... It's a secret")
    if(name === undefined) {
        document.getElementById("theme").textContent = "当前主题: 普通"
    } else if(name === "S1") {
        document.getElementById("theme").textContent="当前主题: " + player.options.secretThemeKey;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    } else if(name === "S2") {
        document.getElementById("theme").textContent="当前主题: " + player.options.secretThemeKey;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    } else if(name === "S3") {
        document.getElementById("theme").textContent="当前主题: " + player.options.secretThemeKey;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    } else if(name === "S4") {
        document.getElementById("theme").textContent="当前主题: " + player.options.secretThemeKey;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    }  else if(name === "S5") {
        document.getElementById("theme").textContent="当前主题: " + player.options.secretThemeKey;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    } else {
        document.getElementById("theme").textContent="当前主题: " + name;
    }

    if (name === undefined) return;

    var head = document.head;
    var link = document.createElement('link');

    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = "stylesheets/theme-" + name + ".css";

    head.appendChild(link);
}

document.getElementById("theme").onclick = function () {
    if (player.options.theme === undefined) {
        player.options.theme = "Metro";
    } else if (player.options.theme === "Metro") {
        player.options.theme = "Dark";
        Chart.defaults.global.defaultFontColor = '#888';
        normalDimChart.data.datasets[0].borderColor = '#888'
    } else if (player.options.theme === "Dark") {
        player.options.theme = "Dark Metro";
    } else if (player.options.theme === "Dark Metro") {
        player.options.theme = "Inverted";
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    } else if (player.options.theme === "Inverted") {
        player.options.theme = "Inverted Metro";
    } else {
        player.options.theme = undefined;
        Chart.defaults.global.defaultFontColor = 'black';
        normalDimChart.data.datasets[0].borderColor = '#000'
    }

    setTheme(player.options.theme);

}


let kongIPMult = 1
let kongDimMult = 1
let kongAllDimMult = 1
let kongEPMult = 1








function showTab(tabName) {
    //iterate over all elements in div_tab class. Hide everything that's not tabName and show tabName
    var tabs = document.getElementsByClassName('tab');
    var tab;
    for (var i = 0; i < tabs.length; i++) {
        tab = tabs.item(i);
        if (tab.id === tabName) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    }
    if (document.getElementById("timestudies").style.display != "none" && document.getElementById("eternitystore").style.display != "none") document.getElementById("TTbuttons").style.display = "block";
    else document.getElementById("TTbuttons").style.display = "none"
    if (document.getElementById("antimatterdimensions").style.display != "none" && document.getElementById("dimensions").style.display != "none") document.getElementById("progress").style.display = "block";
    else document.getElementById("progress").style.display = "none"
    resizeCanvas();
    closeToolTip();
}




function updateMoney() {
    var element = document.getElementById("coinAmount");
    element.textContent = formatValue(player.options.notation, player.money, 2, 1);
    var element2 = document.getElementById("matter");
    if (player.currentChallenge == "challenge12" || player.currentChallenge == "postc1") element2.textContent = "这里有 " + formatValue(player.options.notation, player.matter, 2, 1) + " 物质."
    if (player.currentChallenge == "postc6") element2.textContent = "这里有 " + formatValue(player.options.notation, Decimal.pow(player.matter,20), 2, 1) + " 物质."; //TODO
}

function updateCoinPerSec() {
    var element = document.getElementById("coinsPerSec");
    if (player.currentChallenge == "challenge3" || player.currentChallenge == "postc1") {
      element.textContent = '你每秒可以得到 ' + shortenDimensions(getDimensionProductionPerSecond(1).times(player.chall3Pow)) + ' 反物质。'
    } else if (player.currentChallenge == "challenge7") {
      element.textContent = '你每秒可以得到 ' + (shortenDimensions(getDimensionProductionPerSecond(1).plus(getDimensionProductionPerSecond(2)))) + ' 反物质。'
    } else {
      element.textContent = '你每秒可以得到 ' + shortenDimensions(getDimensionProductionPerSecond(1)) + ' 反物质。'
    }
}

function getInfinitied() {return Math.max(player.infinitied + player.infinitiedBank, 0)}







function getGalaxyCostScalingStart() {
    var n = 100 + ECTimesCompleted("eterc5")*5
    if (player.timestudy.studies.includes(223)) n += 7
    if (player.timestudy.studies.includes(224)) n += Math.floor(player.resets/2000)
    return n
}

function getGalaxyRequirement() {
    let amount = 80 + ((player.galaxies) * 60);
    if (player.timestudy.studies.includes(42)) amount = 80 + ((player.galaxies) * 52)
    if (player.currentChallenge == "challenge4") amount = 99 + ((player.galaxies) * 90)

    let galaxyCostScalingStart = getGalaxyCostScalingStart()
    if (player.currentEternityChall == "eterc5") {
        amount += Math.pow(player.galaxies, 2) + player.galaxies
    }
    else if ((player.galaxies) >= galaxyCostScalingStart) {
        amount += Math.pow((player.galaxies)-(galaxyCostScalingStart-1),2)+(player.galaxies)-(galaxyCostScalingStart-1)
    }
    if (player.galaxies >= 800) {
        amount = Math.floor(amount * Math.pow(1.002, (player.galaxies-799)))
    }

    if (player.infinityUpgrades.includes("resetBoost")) amount -= 9;
    if (player.challenges.includes("postc5")) amount -= 1;

    return amount;
}

function getETA(cost) {
    var a = 100;
    if (player.money.gte(cost)) return 0
    while (ETACalc(a).lt(cost)) {
        a *= 10;
        if (a > 1e20) return Infinity;
    }
    var b = a / 10;
    var q = ETACalc((a+b)/2);
    while (q.gt(cost.times(1.0001)) || q.lt(cost.dividedBy(1.0001))) {
        console.log("q = "+q)
        console.log("a = "+a)
        console.log("b = "+b)
        if (q.lt(cost)) a = (a+b)/2;
        else b = (a+b)/2;
        q = ETACalc((a+b)/2);
    }
    return (a+b)/2;
}

function ETACalc(t) {
    var value = player.money.plus(getDimensionProductionPerSecond(1).times(t));
    var div = 1;
    for (let tier = 2; tier <= 8; ++tier) {
        var name = TIER_NAMES[tier-1]
        div *= tier;
        value = value.plus(getDimensionProductionPerSecond(tier).times(getDimensionProductionPerSecond(tier-1)).times(Decimal.pow(t,tier)).dividedBy(Decimal.max(player[name+"Amount"].times(div).times(10), 1))) ;
    }
    return value
}



var worstChallengeTime = 1

function updateWorstChallengeTime() {
    worstChallengeTime = 1
    for (var i=0; i<10; i++) {
        if (player.challengeTimes[i] > worstChallengeTime) worstChallengeTime = player.challengeTimes[i]
    }
}


function sacrificeConf() {
    player.options.sacrificeConfirmation = !player.options.sacrificeConfirmation
}




function updateDimensions() {
    if (document.getElementById("antimatterdimensions").style.display == "block" && document.getElementById("dimensions").style.display == "block") {

        for (let tier = 1; tier <= 8; ++tier) {
            var name = TIER_NAMES[tier];
            if (!canBuyDimension(tier) && document.getElementById(name + "Row").style.display !== "table-row") {
                break;
            }
            document.getElementById(name + "D").childNodes[0].nodeValue = cnwd(DISPLAY_NAMES[tier]) + "维度 x" + formatValue(player.options.notation, getDimensionFinalMultiplier(tier), 1, 1);
            document.getElementById(name + "Amount").textContent = getDimensionDescription(tier);
        }



        for (let tier = 1; tier <= 8; ++tier) {
            var name = TIER_NAMES[tier];
            if (!canBuyDimension(tier)) {
                break;
            }

            document.getElementById(name + "Row").style.display = "table-row";
            document.getElementById(name + "Row").style.visibility = "visible";


        }

        var shiftRequirement = getShiftRequirement(0);
        if (player.currentChallenge == "challenge4" ? shiftRequirement.tier < 6 : shiftRequirement.tier < 8) {
            document.getElementById("resetLabel").textContent = '维度转换 ('+ player.resets +'): 需要 ' + shiftRequirement.amount + " " + cnwd(DISPLAY_NAMES[shiftRequirement.tier]) + "维度"
        }
        else document.getElementById("resetLabel").textContent = '维度提升 ('+ player.resets +'): 需要 ' + shiftRequirement.amount + " " + cnwd(DISPLAY_NAMES[shiftRequirement.tier]) + "维度"

        if (player.currentChallenge == "challenge4" ? player.resets > 2 : player.resets > 3) {
            document.getElementById("softReset").textContent = "重置游戏以获得加成"
        } else {
            document.getElementById("softReset").textContent = "重置游戏进入新的维度"
        }
        let extraGals = player.replicanti.galaxies
        if (player.timestudy.studies.includes(225)) extraGals += Math.floor(player.replicanti.amount.e / 1000)
        if (player.timestudy.studies.includes(226)) extraGals += Math.floor(player.replicanti.gal / 15)
        var galString = ""
        if (player.galaxies >= 800) galString += "Remote Antimatter Galaxies (";
        else if (player.galaxies >= getGalaxyCostScalingStart() || player.currentEternityChall === "eterc5") galString += "远距离反物质星系 (";
        else galString += "反物质星系 (";
        galString += player.galaxies;
        if (extraGals > 0) galString += " + "+extraGals;
        if (player.dilation.freeGalaxies > 0) galString += " + "+player.dilation.freeGalaxies;
        galString += "): 需要 " + getGalaxyRequirement()
        if (player.currentChallenge == "challenge4") galString +=  " 第六维度";
        else galString +=  " 第八维度";
        document.getElementById("secondResetLabel").textContent = galString;
    }

    if (canBuyTickSpeed() || player.currentEternityChall == "eterc9") {
        var tickmult = getTickSpeedMultiplier()
        if (tickmult < 1e-9) document.getElementById("tickLabel").textContent = "把时间间隔除以 " + shortenDimensions(1 / tickmult) + '.'
        else {
            var places = 0
            if (tickmult < 0.2) places = Math.floor(Math.log10(Math.round(1/tickmult)))
            document.getElementById("tickLabel").textContent = '时刻间隔减少 ' + ((1 - tickmult) * 100).toFixed(places) + '%.'
        }

        document.getElementById("tickSpeed").style.visibility = "visible";
        document.getElementById("tickSpeedMax").style.visibility = "visible";
        document.getElementById("tickLabel").style.visibility = "visible";
        document.getElementById("tickSpeedAmount").style.visibility = "visible";
    } else {
        document.getElementById("tickSpeed").style.visibility = "hidden";
        document.getElementById("tickSpeedMax").style.visibility = "hidden";
        document.getElementById("tickLabel").style.visibility = "hidden";
        document.getElementById("tickSpeedAmount").style.visibility = "hidden";
    }

    if (player.bestInfinityTime == 9999999999) {
        document.getElementById("bestInfinity").textContent = ""
        document.getElementById("infinitied").textContent = ""
        document.getElementById("thisInfinity").textContent = ""
    } else {
        document.getElementById("bestInfinity").textContent = "你最快到达无限的时间为 " + timeDisplay(player.bestInfinityTime) + "。"
        document.getElementById("thisInfinity").textContent = "你在本次无限的时间已有 " + timeDisplay(player.thisInfinityTime) + "。"
        if (player.infinityPoints.equals(1)) {
            document.getElementById("infinityPoints1").textContent = "你拥有 1 无限点数。"
            document.getElementById("infinityPoints2").textContent = "你拥有 1 无限点数。"
        }
        else {
            document.getElementById("infinityPoints1").innerHTML = "你拥有 <span class=\"IPAmount1\">"+shortenDimensions(player.infinityPoints)+"</span> 无限点数。"
            document.getElementById("infinityPoints2").innerHTML = "你拥有 <span class=\"IPAmount2\">"+shortenDimensions(player.infinityPoints)+"</span> 无限点数。"
        }
        if (player.infinitied == 1) document.getElementById("infinitied").textContent = "你已到达无限 1 次。"
        else document.getElementById("infinitied").textContent = "你已到达无限 " + player.infinitied.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 次"
        if (player.infinitiedBank > 0) document.getElementById("infinitied").textContent = "本轮永恒你已到达无限 " + player.infinitied.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 次。"

    }

    if (document.getElementById("stats").style.display == "block" && document.getElementById("statistics").style.display == "block") {
        document.getElementById("totalmoney").textContent = '你累计制造了 ' + shortenMoney(player.totalmoney) + ' 反物质.'
        document.getElementById("totalresets").textContent = '你完成了 ' + player.resets + ' 维度提升/转变。'
        document.getElementById("galaxies").textContent = '你拥有 ' + Math.round(player.galaxies) + ' 反物质星系。'
        document.getElementById("totalTime").textContent = "你在本游戏玩了 " + timeDisplay(player.totalTimePlayed) + "。"

        if (player.eternities == 0) {
            document.getElementById("eternitied").textContent = ""
            document.getElementById("besteternity").textContent = ""
            document.getElementById("thiseternity").textContent = ""
        } else {
            document.getElementById("eternitied").textContent = "你已到达永恒 " + player.eternities.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " 次。"
            document.getElementById("besteternity").textContent = "你在本次永恒已经花费了 "+timeDisplay(player.thisEternity)+"。"
            document.getElementById("thiseternity").textContent = "你的最快一轮永恒时间为 "+timeDisplay(player.bestEternity)+"。"
        }
    }

    if (document.getElementById("infinity").style.display == "block") {
        if (document.getElementById("preinf").style.display == "block") {
            document.getElementById("infi11").innerHTML = "根据总游戏时间令普通维度获取倍数 <br>当前: " + (Math.pow(0.5 * player.totalTimePlayed / 600, 0.15)).toFixed(2) + "x<br>花费: 1 无限点数"
            document.getElementById("infi12").innerHTML = "根据到达无限次数令第一维度和第八维度获得倍数<br>当前: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>花费: 1 无限点数"
            document.getElementById("infi13").innerHTML = "根据到达无限次数令第三维度和第六维度获得倍数<br>当前: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>花费: 1 无限点数"
            document.getElementById("infi22").innerHTML = "根据到达无限次数令第二维度和第七维度获得倍数<br>当前: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>花费: 1 无限点数"
            document.getElementById("infi23").innerHTML = "根据到达无限次数令第四维度和第五维度获得倍数<br>当前: " + formatValue(player.options.notation, dimMults(), 1, 1) + "x<br>花费: 1 无限点数"
            document.getElementById("infi31").innerHTML = "根据当前无限的游戏时间令普通维度获得倍数<br>当前: " + Decimal.max(Math.pow(player.thisInfinityTime / 2400, 0.25), 1).toFixed(2) + "x<br>花费: 3 无限点数"
            document.getElementById("infi32").innerHTML = "根据未花费无限点数令第一维度获得倍数<br>当前: " + formatValue(player.options.notation, player.infinityPoints.dividedBy(2).pow(1.5).plus(1), 2, 2) + "x<br>花费: 5 无限点数"
            document.getElementById("infi34").innerHTML = "根据到达无限的最快时间生产无限点数 <br>当前: 每 " + timeDisplay(player.bestInfinityTime*10) +"获得 "+shortenDimensions(player.infMult.times(kongIPMult))+ " 点<br>花费: 10 无限点数"
        }
        else if (document.getElementById("postinf").style.display == "block") {
            document.getElementById("postinfi11").innerHTML = "根据总共生产的反物质来增强所有维度。<br>当前: "+ Math.pow(player.totalmoney.e+1, 0.5).toFixed(2)+"x<br>花费: "+shortenCosts(1e4)+" 无限点数"
            document.getElementById("postinfi21").innerHTML = "根据当前拥有的反物质来增强所有维度。<br>当前: "+ Math.pow(player.money.e+1, 0.5).toFixed(2)+"x<br>花费: "+shortenCosts(5e4)+" 无限点数"
            document.getElementById("postinfi31").innerHTML = "时刻间隔的成本倍数增加值 <br>"+player.tickSpeedMultDecrease+"x -> "+(player.tickSpeedMultDecrease-1)+"x<br>花费: "+shortenDimensions(player.tickSpeedMultDecreaseCost) +" 无限点数"
            if (player.tickSpeedMultDecrease <= 2) document.getElementById("postinfi31").innerHTML = "时刻间隔的成本倍数增加值 <br>"+player.tickSpeedMultDecrease+"x"
            document.getElementById("postinfi22").innerHTML = "根据完成的成就来增强所有维度 <br>当前: "+achievementMult.toFixed(2)+"x<br>花费: "+shortenCosts(1e6)+" 无限点数"
            document.getElementById("postinfi12").innerHTML = "根据到达无限的次数增强所有维度 <br>当前: "+(1+Math.log10(getInfinitied()+1)*10).toFixed(2)+"x<br>花费: "+shortenCosts(1e5)+" 无限点数"
            if (player.timestudy.studies.includes(31)) document.getElementById("postinfi12").innerHTML = "根据到达无限的次数增强所有维度 <br>当前: "+shortenMoney(Math.pow((Math.log10(getInfinitied()+1)*10).toFixed(2), 4))+"x<br>花费: "+shortenCosts(1e5)+" 无限点数"
            document.getElementById("postinfi41").innerHTML = "星系效果增加50% <br>花费: "+shortenCosts(5e11)+" 无限点数"
            document.getElementById("postinfi32").innerHTML = "根据最慢的完成挑战时间增强所有维度<br>当前:"+Decimal.max(10*3000/worstChallengeTime, 1).toFixed(2)+"x<br>花费: "+shortenCosts(1e7)+" 无限点数"
            document.getElementById("postinfi42").innerHTML = "维度的成本倍数增加值 <br>"+player.dimensionMultDecrease+"x -> "+(player.dimensionMultDecrease-1)+"x<br>花费: "+shortenCosts(player.dimensionMultDecreaseCost) +" 无限点数"

            document.getElementById("postinfi13").innerHTML = "根据你最快到达无限的时间生产无限次数<br>每 "+timeDisplay(player.bestInfinityTime*5)+ "获得一点 <br>花费: "+shortenCosts(20e6)+" 无限点数"
            document.getElementById("postinfi23").innerHTML = "可以选择批量购买维度提升 <br>花费: "+shortenCosts(5e9)+" 无限点数"
            document.getElementById("postinfi33").innerHTML = "自动购买速度翻倍 <br>花费:"+shortenCosts(1e15)+" 无限点数"
            if (player.dimensionMultDecrease <= 3) document.getElementById("postinfi42").innerHTML = "维度的成本倍数增加值 <br>"+player.dimensionMultDecrease.toFixed(1)+"x"

            document.getElementById("offlineProd").innerHTML = "自动生产你过去10次无限中，最高的无限点数/分钟的 "+player.offlineProd+"% > "+Math.max(Math.max(5, player.offlineProd + 5), Math.min(50, player.offlineProd + 5))+"% ,离线后仍然生效<br>当前: "+shortenMoney(bestRunIppm.times(player.offlineProd/100)) +"无限点数/分钟<br> 花费: "+shortenCosts(player.offlineProdCost)+" 无限点数"
            if (player.offlineProd == 50) document.getElementById("offlineProd").innerHTML = "自动生产你过去10次无限中，最高的无限点数/分钟的 "+player.offlineProd+"%，离线后仍然生效。<br>当前: "+shortenMoney(bestRunIppm.times(player.offlineProd/100)) +" 无限点数/分钟"
        }
    }

    if (document.getElementById("eternityupgrades").style.display == "block" && document.getElementById("eternitystore").style.display == "block") {
        document.getElementById("eter1").innerHTML = "基于未分配的永恒点数给予无限维度倍数 (x+1)<br>当前: "+shortenMoney(player.eternityPoints.plus(1))+"x<br>成本: 5 永恒点数"
        document.getElementById("eter2").innerHTML = "基于永恒次数给予无限维度倍数 ((x/200)^log4(2x))<br>当前: "+shortenMoney(Decimal.pow(Math.min(player.eternities, 100000)/200 + 1, Math.log(Math.min(player.eternities, 100000)*2+1)/Math.log(4)).times(new Decimal((player.eternities-100000)/200 + 1).times(Math.log((player.eternities- 100000)*2+1)/Math.log(4)).max(1)))+"x<br>成本: 10 永恒点数"
        document.getElementById("eter3").innerHTML = "基于无限挑战总时间给予无限维度倍数<br>当前: "+shortenMoney(Decimal.pow(2,300/Math.max(infchallengeTimes, player.achievements.includes("r112") ? 6.1 : 7.5)))+"x<br>成本: "+shortenCosts(50e3)+" 永恒点数"
        document.getElementById("eter4").innerHTML = "你的成就加成对时间维度同样生效"+"<br>成本: "+shortenCosts(1e16)+" 永恒点数"
        document.getElementById("eter5").innerHTML = "时间维度的倍数乘以你未花费的时间定律"+"<br>成本: "+shortenCosts(1e40)+" 永恒点数"
        document.getElementById("eter6").innerHTML = "时间维度的倍数乘以你玩的天数"+"<br>成本: "+shortenCosts(1e50)+" 永恒点数"
    }

    if (document.getElementById("dilation").style.display == "block") {
        if (player.dilation.active) {
            if (Math.pow(Decimal.log10(player.money) / 400, 1.5) * (Math.pow(3, player.dilation.rebuyables[3])) - player.dilation.totalTachyonParticles <= 0) {
                document.getElementById("enabledilation").innerHTML = "禁用膨胀.<br>拥有 " + shortenMoney(Decimal.pow(10, Math.pow(player.dilation.tachyonParticles * Math.pow(400, 1.5) / Math.pow(3, player.dilation.rebuyables[3]), 2/3))) + " 反物质获得更多的超光速粒子."
            } else {
                document.getElementById("enabledilation").textContent = "禁用膨胀."
            }
        }
        else document.getElementById("enabledilation").textContent = "时间膨胀."
    }
}

function updateCosts() {
    document.getElementById("first").textContent = '成本: ' + shortenCosts(player.firstCost);
    document.getElementById("second").textContent = '成本: ' + shortenCosts(player.secondCost);
    document.getElementById("third").textContent = '成本: ' + shortenCosts(player.thirdCost);
    document.getElementById("fourth").textContent = '成本: ' + shortenCosts(player.fourthCost);
    document.getElementById("fifth").textContent = '成本: ' + shortenCosts(player.fifthCost);
    document.getElementById("sixth").textContent = '成本: ' + shortenCosts(player.sixthCost);
    document.getElementById("seventh").textContent = '成本: ' + shortenCosts(player.seventhCost);
    document.getElementById("eight").textContent = '成本: ' + shortenCosts(player.eightCost);

    document.getElementById("firstMax").textContent = '直到 10, 成本: ' + shortenCosts(player.firstCost.times(10 - dimBought(1)));
    document.getElementById("secondMax").textContent = '直到 10, 成本: ' + shortenCosts(player.secondCost.times(10 - dimBought(2)));
    document.getElementById("thirdMax").textContent = '直到 10, 成本: ' + shortenCosts(player.thirdCost.times(10 - dimBought(3)));
    document.getElementById("fourthMax").textContent = '直到 10, 成本: ' + shortenCosts(player.fourthCost.times(10 - dimBought(4)));
    document.getElementById("fifthMax").textContent = '直到 10, 成本: ' + shortenCosts(player.fifthCost.times(10 - dimBought(5)));
    document.getElementById("sixthMax").textContent = '直到 10, 成本: ' + shortenCosts(player.sixthCost.times(10 - dimBought(6)));
    document.getElementById("seventhMax").textContent = '直到 10, 成本: ' + shortenCosts(player.seventhCost.times(10 - dimBought(7)));
    document.getElementById("eightMax").textContent = '直到 10, 成本: ' + shortenCosts(player.eightCost.times(10 - dimBought(8)));

    document.getElementById("tickSpeed").textContent = '成本: ' + shortenCosts(player.tickSpeedCost);


    for (var i=1; i<=8; i++) {

        document.getElementById("infMax"+i).textContent = "成本: " + shortenCosts(player["infinityDimension"+i].cost) + " 无限点数"
    }

    for (var i=1; i<=8; i++) {

        document.getElementById("timeMax"+i).textContent = "成本: " + shortenDimensions(player["timeDimension"+i].cost) + " 永恒点数"
    }
}

function floatText(id, text, leftOffset = 150) {
    if (!player.options.animations.floatingText) return
    var el = $("#"+id)
    el.append("<div class='floatingText' style='left: "+leftOffset+"px'>"+text+"</div>")
    setTimeout(function() {
        el.children()[0].remove()
    }, 1000)
}




function isEterChall(elem) {
    return !elem.id.includes("eter")
}

function updateChallenges() {
    try {
        var buttons = Array.from(document.getElementsByClassName('onchallengebtn')).filter(isEterChall)
        for (var i=0; i < buttons.length; i++) {
            buttons[i].className = "challengesbtn";
            buttons[i].textContent = "开始"
        }

        var buttonss = Array.from(document.getElementsByClassName('completedchallengesbtn')).filter(isEterChall)
        for (var i=0; i < buttonss.length; i++) {
            buttonss[i].className = "challengesbtn";
            buttonss[i].textContent = "开始"
        }


        for (var i=0; i < player.challenges.length; i++) {
            document.getElementById(player.challenges[i]).className = "completedchallengesbtn";
            document.getElementById(player.challenges[i]).textContent = "已完成"
        }

        if (player.currentChallenge != "") {
            document.getElementById(player.currentChallenge).className = "onchallengebtn"
            document.getElementById(player.currentChallenge).textContent = "运行中"
        }

        if (player.money.gte(new Decimal("1e2000")) || Object.keys(player.eternityChalls).length > 0 || player.eternityChallUnlocked !== 0) document.getElementById("challTabButtons").style.display = "table"
        for (var i=1; i<9; i++) {
            if (player.postChallUnlocked >= i) document.getElementById("postc"+i+"div").style.display = "inline-block"
            else document.getElementById("postc"+i+"div").style.display = "none"
        }



    } catch (err) {
        console.log(err)
        updateChallenges()

    }

}


function updateEternityChallenges() {

    for (var property in player.eternityChalls) {
        document.getElementById(property+"div").style.display = "inline-block"
        if (player.eternityChalls[property] < 5) {
            document.getElementById(property).textContent = "未解锁"
            document.getElementById(property).className = "lockedchallengesbtn"
        }
        else {
            document.getElementById(property).textContent = "已完成"
            document.getElementById(property).className = "completedchallengesbtn"
        }
    }

    if (player.eternityChallUnlocked !== 0) {
        document.getElementById("eterc"+player.eternityChallUnlocked).textContent = "开始"
        document.getElementById("eterc"+player.eternityChallUnlocked).className = "challengesbtn"
        document.getElementById("eterctabbtn").style.display = "block"
    } else {
        for (i=1; i<13; i++) {
            if (player.eternityChalls["eterc"+i] !== 5) {
                document.getElementById("eterc"+i).textContent = "未解锁"
                document.getElementById("eterc"+i).className = "lockedchallengesbtn"
            }
        }
    }

    if (player.eternityChallUnlocked == 0 && player.eternityChalls.eterc1 === undefined) {
        document.getElementById("eterctabbtn").style.display = "none"
        for (i=1; i<13; i++) {
            document.getElementById("eterc"+i+"div").style.display = "none"
        }
    }

    if (player.eternityChalls.eterc1 !== undefined) document.getElementById("eterctabbtn").style.display = "block"
    if (player.etercreq !== 0) document.getElementById("eterc"+player.etercreq+"div").style.display = "block"

    if (player.currentEternityChall !== "") {
        document.getElementById(player.currentEternityChall).textContent = "运行中"
        document.getElementById(player.currentEternityChall).className = "onchallengebtn"
    }
}









function toggleChallengeRetry() {
    if (player.options.retryChallenge) {
        player.options.retryChallenge = false
        document.getElementById("retry").textContent = "自动重试挑战 关闭"
    } else {
        player.options.retryChallenge = true
        document.getElementById("retry").textContent = "自动重试挑战 开启"
    }
}

document.getElementById("news").onclick = function () {
    if (document.getElementById("news").textContent === "Click this to unlock a secret achievement.") {
        giveAchievement("Real news")
    }
};

document.getElementById("secretstudy").onclick = function () {
    document.getElementById("secretstudy").style.opacity = "1";
    document.getElementById("secretstudy").style.cursor = "default";
    giveAchievement("Go study in real life instead");
    setTimeout(drawStudyTree, 2000);
};

document.getElementById("The first one's always free").onclick = function () {
    giveAchievement("The first one's always free")
};




function glowText(id) {
  var text = document.getElementById(id);
  text.style.setProperty("-webkit-animation", "glow 1s");
  text.style.setProperty("animation", "glow 1s");
}





document.getElementById("maxall").onclick = function () {
    if (!player.break && player.money.gt(Number.MAX_VALUE)) return false;
    buyMaxTickSpeed();

    for (var tier=1; tier<9;tier++) {
        var name = TIER_NAMES[tier];
        var cost = player[name + 'Cost'].times(10 - dimBought(tier))
        var multBefore = player[name + 'Pow']
        if (tier >= 3 && (player.currentChallenge == "challenge10" || player.currentChallenge == "postc1")) {
            if (!canBuyDimension(tier)) continue
            if (player[TIER_NAMES[tier-2] + 'Amount'].lt(cost)) continue
                if (canBuyDimension(tier)) {
                    if (cost.lt(player[TIER_NAMES[tier-2]+"Amount"]) && dimBought(tier) != 0) {
                        player[TIER_NAMES[tier-2]+"Amount"] = player[TIER_NAMES[tier-2]+"Amount"].minus(cost)
                        player[name + "Amount"] = Decimal.round(player[name + "Amount"].plus(10 - dimBought(tier)))
                        player[name + 'Bought'] += (10 - dimBought(tier));
                        player[name + 'Pow']  = player[name + 'Pow'].times(getDimensionPowerMultiplier(tier))
                        player[name + "Cost"] = player[name + "Cost"].times(getDimensionCostMultiplier(tier))
                    }
                    while (player[TIER_NAMES[tier-2]+"Amount"].gt(player[name + "Cost"].times(10))) {
                        player[TIER_NAMES[tier-2]+"Amount"] = player[TIER_NAMES[tier-2]+"Amount"].minus(player[name + "Cost"].times(10))
                        player[name + "Cost"] = player[name + "Cost"].times(getDimensionCostMultiplier(tier))
                        player[name + "Amount"] = Decimal.round(player[name + "Amount"].plus(10))
                        player[name + 'Bought'] += 10
                        player[name + "Pow"] = player[name + "Pow"].times(getDimensionPowerMultiplier(tier))
                        if (player[name + 'Cost'].gte(Number.MAX_VALUE)) player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)
                    }


                    onBuyDimension(tier);
                }
        } else {
        if (!canBuyDimension(tier)) continue
            if (cost.lt(player.money) && dimBought(tier) != 0) {
                player.money = player.money.minus(cost)
                player[name + "Amount"] = Decimal.round(player[name + "Amount"].plus(10 - dimBought(tier)))
                player[name + 'Bought'] += (10 - dimBought(tier));
                player[name + 'Pow']  = player[name + 'Pow'].times(getDimensionPowerMultiplier(tier))
                player[name + "Cost"] = player[name + "Cost"].times(getDimensionCostMultiplier(tier))
            }
            if (player.money.lt(player[name + "Cost"].times(10))) continue

            if ((player.dimensionMultDecrease > 3 || player.currentChallenge == "postc5" || player.currentChallenge == "challenge5")) {
                while ((player.money.gte(player[name + "Cost"].times(10)) && player.money.lte(Number.MAX_VALUE)) || (player.money.gte(player[name + "Cost"].times(10)) && player.currentChallenge != "challenge5")) {
                        player.money = player.money.minus(player[name + "Cost"].times(10))
                        if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5") player[name + "Cost"] = player[name + "Cost"].times(getDimensionCostMultiplier(tier))
                        else if (player.currentChallenge == "postc5") multiplyPC5Costs(player[name + 'Cost'], tier)
                        else multiplySameCosts(player[name + 'Cost'])
                        player[name + "Amount"] = Decimal.round(player[name + "Amount"].plus(10))
                        player[name + 'Bought'] += 10
                        player[name + "Pow"] = player[name + "Pow"].times(getDimensionPowerMultiplier(tier))
                        if (player[name + 'Cost'].gte(Number.MAX_VALUE)) player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)
                        if (player.currentChallenge == "challenge8") clearDimensions(tier-1)
                }
            } else {
                if (player[name + "Cost"].lt(Number.MAX_VALUE)) {
                    while (player.money.gte(player[name + "Cost"].times(10)) && player[name + "Cost"].lte(Number.MAX_VALUE)) {
                        player.money = player.money.minus(player[name + "Cost"].times(10))
                        if (player.currentChallenge != "challenge5" && player.currentChallenge != "postc5") player[name + "Cost"] = player[name + "Cost"].times(getDimensionCostMultiplier(tier))
                        else if (player.currentChallenge == "postc5") multiplyPC5Costs(player[name + 'Cost'], tier)
                        else multiplySameCosts(player[name + 'Cost'])
                        player[name + "Amount"] = Decimal.round(player[name + "Amount"].plus(10))
                        player[name + 'Bought'] += 10
                        player[name + "Pow"] = player[name + "Pow"].times(getDimensionPowerMultiplier(tier))
                        if (player[name + 'Cost'].gte(Number.MAX_VALUE)) player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)
                        if (player.currentChallenge == "challenge8") clearDimensions(tier-1)
                }
                }

                if (player[name + "Cost"].gte(Number.MAX_VALUE)) {
                    var a = Math.log10(Math.sqrt(player.dimensionMultDecrease))
                    var b = player.costMultipliers[tier-1].dividedBy(Math.sqrt(player.dimensionMultDecrease)).log10()
                    var c = player[name + "Cost"].dividedBy(player.money).log10()
                    var discriminant = Math.pow(b, 2) - (c *a* 4)
                    if (discriminant < 0) continue
                    var buying = Math.floor((Math.sqrt(Math.pow(b, 2) - (c *a *4))-b)/(2 * a))+1
                    if (buying <= 0) return false
                    player[name+"Amount"] = Decimal.round(player[name+"Amount"].plus(10*buying))
                    preInfBuy = Math.floor(1 + (308 - initCost[tier].log10()) / costMults[tier].log10())
                    postInfBuy = player[name + 'Bought']/10+buying - preInfBuy - 1
                    postInfInitCost = initCost[tier].times(Decimal.pow(costMults[tier], preInfBuy))
                    player[name + 'Bought'] += 10*buying
                    player[name + "Pow"] = player[name + "Pow"].times(Decimal.pow(getDimensionPowerMultiplier(tier), buying))

                    newCost = postInfInitCost.times(Decimal.pow(costMults[tier], postInfBuy)).times(Decimal.pow(player.dimensionMultDecrease, postInfBuy * (postInfBuy+1)/2))
                    newMult = costMults[tier].times(Decimal.pow(player.dimensionMultDecrease, postInfBuy+1))
                    //if (buying > 0 )player[name + "Cost"] = player.costMultipliers[tier-1].times(Decimal.pow(player.dimensionMultDecrease, (buying * buying - buying)/2)).times(player[name + "Cost"])

                    player[name + "Cost"] = newCost
                    player.costMultipliers[tier-1] = newMult
                    if (player.money.gte(player[name + "Cost"]))player.money = player.money.minus(player[name + "Cost"])
                    player[name + "Cost"] = player[name + "Cost"].times(player.costMultipliers[tier-1])
                    player.costMultipliers[tier-1] = player.costMultipliers[tier-1].times(player.dimensionMultDecrease)
                }


        }
        }
        if ((player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") && player.matter.equals(0)) player.matter = new Decimal(1);
        if (player.currentChallenge == "challenge2" || player.currentChallenge == "postc1") player.chall2Pow = 0;
        if (player.currentChallenge == "postc1") clearDimensions(tier-1);
        player.postC4Tier = tier;
        onBuyDimension(tier)
        floatText(name + "D", "x" + shortenMoney(player[name + "Pow"].dividedBy(multBefore)))
    }
}




document.getElementById("challengeconfirmation").onclick = function () {
    if (!player.options.challConf) {
        player.options.challConf = true;
        document.getElementById("challengeconfirmation").textContent = "挑战确认 关闭"
    } else {
        player.options.challConf = false;
        document.getElementById("challengeconfirmation").textContent = "挑战确认 开启"
    }
}




function buyInfinityUpgrade(name, cost) {
    if (player.infinityPoints.gte(cost) && !player.infinityUpgrades.includes(name)) {
        player.infinityUpgrades.push(name);
        player.infinityPoints = player.infinityPoints.minus(cost);
        return true
    } else return false
}

document.getElementById("infiMult").onclick = function() {
    if (player.infinityUpgrades.includes("skipResetGalaxy") && player.infinityUpgrades.includes("passiveGen") && player.infinityUpgrades.includes("galaxyBoost") && player.infinityUpgrades.includes("resetBoost") && player.infinityPoints.gte(player.infMultCost)) {
        player.infinityPoints = player.infinityPoints.minus(player.infMultCost)
        player.infMult = player.infMult.times(2);
        player.autoIP = player.autoIP.times(2);
        player.infMultCost = player.infMultCost.times(10)
        document.getElementById("infiMult").innerHTML = "所有来源的无限点数翻倍 <br>当前: "+shorten(player.infMult.times(kongIPMult)) +"x<br>花费: "+shortenCosts(player.infMultCost)+" 无限点数"
        if (player.autobuyers[11].priority !== undefined && player.autobuyers[11].priority !== null && player.autoCrunchMode == "amount") player.autobuyers[11].priority = player.autobuyers[11].priority.times(2);
        if (player.autoCrunchMode == "amount") document.getElementById("priority12").value = formatValue("Scientific", player.autobuyers[11].priority, 2, 0);
    }
}


function updateEternityUpgrades() {
    document.getElementById("eter1").className = (player.eternityUpgrades.includes(1)) ? "eternityupbtnbought" : (player.eternityPoints.gte(5)) ? "eternityupbtn" : "eternityupbtnlocked"
    document.getElementById("eter2").className = (player.eternityUpgrades.includes(2)) ? "eternityupbtnbought" : (player.eternityPoints.gte(10)) ? "eternityupbtn" : "eternityupbtnlocked"
    document.getElementById("eter3").className = (player.eternityUpgrades.includes(3)) ? "eternityupbtnbought" : (player.eternityPoints.gte(50e3)) ? "eternityupbtn" : "eternityupbtnlocked"
    document.getElementById("eter4").className = (player.eternityUpgrades.includes(4)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e16)) ? "eternityupbtn" : "eternityupbtnlocked"
    document.getElementById("eter5").className = (player.eternityUpgrades.includes(5)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e40)) ? "eternityupbtn" : "eternityupbtnlocked"
    document.getElementById("eter6").className = (player.eternityUpgrades.includes(6)) ? "eternityupbtnbought" : (player.eternityPoints.gte(1e50)) ? "eternityupbtn" : "eternityupbtnlocked"
}


function buyEternityUpgrade(name, cost) {
    if (player.eternityPoints.gte(cost) && !player.eternityUpgrades.includes(name)) {
        player.eternityUpgrades.push(name)
        player.eternityPoints = player.eternityPoints.minus(cost)
        updateEternityUpgrades()
    }
}


function buyEPMult() {
    if (player.eternityPoints.gte(player.epmultCost)) {
        player.epmult = player.epmult.times(5)
        player.eternityBuyer.limit = player.eternityBuyer.limit.times(5)
        document.getElementById("priority13").value = formatValue("Scientific", player.eternityBuyer.limit, 2, 0);
        player.eternityPoints = player.eternityPoints.minus(player.epmultCost)
        let count = player.epmult.ln()/Math.log(5)
        if (player.epmultCost.gte(new Decimal("1e4000"))) player.epmultCost = Decimal.pow(1000, count + Math.pow(count-1334, 1.2)).times(500)
        else if (player.epmultCost.gte(new Decimal("1e1300"))) player.epmultCost = Decimal.pow(1000, count).times(500)
        else if (player.epmultCost.gte(Number.MAX_VALUE)) player.epmultCost = Decimal.pow(500, count).times(500)
        else if (player.epmultCost.gte(new Decimal("1e100"))) player.epmultCost = Decimal.pow(100, count).times(500)
        else player.epmultCost = Decimal.pow(50, count).times(500)
        document.getElementById("epmult").innerHTML = "你获取的永恒点数倍数乘5<p>当前: "+shortenDimensions(player.epmult)+"x<p>成本: "+shortenDimensions(player.epmultCost)+" 永恒点数"
        updateEternityUpgrades()
    }
}

function buyMaxEPMult() {
    while (player.eternityPoints.gte(player.epmultCost)) {
        buyEPMult()
    }
}





function playerInfinityUpgradesOnEternity() {
    if (player.eternities < 4) player.infinityUpgrades = []
    else if (player.eternities < 20) player.infinityUpgrades = ["timeMult", "dimMult", "timeMult2", "skipReset1", "skipReset2", "unspentBonus", "27Mult", "18Mult", "36Mult", "resetMult", "skipReset3", "passiveGen", "45Mult", "resetBoost", "galaxyBoost", "skipResetGalaxy"]
    else player.infinityUpgrades = player.infinityUpgrades
}



document.getElementById("infi11").onclick = function () {
    buyInfinityUpgrade("timeMult",1);
}

document.getElementById("infi21").onclick = function () {
    buyInfinityUpgrade("dimMult",1);
}

document.getElementById("infi12").onclick = function () {
    if (player.infinityUpgrades.includes("timeMult")) buyInfinityUpgrade("18Mult",1);
}

document.getElementById("infi22").onclick = function () {
    if (player.infinityUpgrades.includes("dimMult")) buyInfinityUpgrade("27Mult",1);
}

document.getElementById("infi13").onclick = function () {
    if (player.infinityUpgrades.includes("18Mult")) buyInfinityUpgrade("36Mult",1);
}
document.getElementById("infi23").onclick = function () {
    if (player.infinityUpgrades.includes("27Mult")) buyInfinityUpgrade("45Mult",1);
}

document.getElementById("infi14").onclick = function () {
    if (player.infinityUpgrades.includes("36Mult")) buyInfinityUpgrade("resetBoost",1);
}

document.getElementById("infi24").onclick = function () {
    if (player.infinityUpgrades.includes("45Mult")) buyInfinityUpgrade("galaxyBoost",2);
}

document.getElementById("infi31").onclick = function() {
    buyInfinityUpgrade("timeMult2",3);
}

document.getElementById("infi32").onclick = function() {
    if (player.infinityUpgrades.includes("timeMult2")) buyInfinityUpgrade("unspentBonus",5);
}

document.getElementById("infi33").onclick = function() {
    if (player.infinityUpgrades.includes("unspentBonus")) buyInfinityUpgrade("resetMult",7);
}

document.getElementById("infi34").onclick = function() {
    if (player.infinityUpgrades.includes("resetMult")) buyInfinityUpgrade("passiveGen",10);
}

document.getElementById("infi41").onclick = function() {
    buyInfinityUpgrade("skipReset1",20);
}

document.getElementById("infi42").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset1")) buyInfinityUpgrade("skipReset2", 40)
}

document.getElementById("infi43").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset2")) buyInfinityUpgrade("skipReset3", 80)
}

document.getElementById("infi44").onclick = function() {
    if (player.infinityUpgrades.includes("skipReset3")) buyInfinityUpgrade("skipResetGalaxy", 500)
}


document.getElementById("postinfi11").onclick = function() {
    buyInfinityUpgrade("totalMult",1e4);
}

document.getElementById("postinfi21").onclick = function() {
    buyInfinityUpgrade("currentMult",5e4);
}

document.getElementById("postinfi31").onclick = function() {
    if (player.infinityPoints.gte(player.tickSpeedMultDecreaseCost) && player.tickSpeedMultDecrease > 2) {
        player.infinityPoints = player.infinityPoints.minus(player.tickSpeedMultDecreaseCost)
        player.tickSpeedMultDecreaseCost *= 5
        player.tickSpeedMultDecrease--;
        document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x -> "+(player.tickSpeedMultDecrease-1)+"x<br>Cost: "+shortenCosts(player.tickSpeedMultDecreaseCost) +" IP"
        if (player.tickSpeedMultDecrease <= 2) document.getElementById("postinfi31").innerHTML = "Tickspeed cost multiplier increase <br>"+player.tickSpeedMultDecrease+"x"
    }
}

document.getElementById("postinfi41").onclick = function() {
    buyInfinityUpgrade("postGalaxy",5e11);
}

document.getElementById("postinfi12").onclick = function() {
    buyInfinityUpgrade("infinitiedMult",1e5);
}

document.getElementById("postinfi22").onclick = function() {
    buyInfinityUpgrade("achievementMult",1e6);
}

document.getElementById("postinfi32").onclick = function() {
    buyInfinityUpgrade("challengeMult",1e7);
}

document.getElementById("postinfi42").onclick = function() {
    if (player.infinityPoints.gte(player.dimensionMultDecreaseCost) && player.dimensionMultDecrease > 3) {
        player.infinityPoints = player.infinityPoints.minus(player.dimensionMultDecreaseCost)
        player.dimensionMultDecreaseCost *= 5000
        player.dimensionMultDecrease--;
        document.getElementById("postinfi42").innerHTML = "维度成本增加倍数 <br>"+player.dimensionMultDecrease+"x -> "+(player.dimensionMultDecrease-1)+"x<br>Cost: "+shortenCosts(player.dimensionMultDecreaseCost) +" IP"
        if (player.dimensionMultDecrease <= 3) document.getElementById("postinfi42").innerHTML = "维度成本增加倍数<br>"+player.dimensionMultDecrease.toFixed(1)+"x"
    }
}

document.getElementById("offlineProd").onclick = function() {
    if (player.infinityPoints.gte(player.offlineProdCost) && player.offlineProd < 50) {
        player.infinityPoints = player.infinityPoints.minus(player.offlineProdCost)
        player.offlineProdCost *= 10
        player.offlineProd += 5

    }
}


function updateInfCosts() {

    document.getElementById("infiMult").innerHTML = "所有来源的无限点数翻倍 <br>当前: "+shorten(player.infMult.times(kongIPMult)) +"x<br>花费: "+shortenCosts(player.infMultCost)+" 无限点数"
    if (document.getElementById("replicantis").style.display == "block" && document.getElementById("infinity").style.display == "block") {
        if (player.replicanti.chance < 1) document.getElementById("replicantichance").innerHTML = "复制概率: "+Math.round(player.replicanti.chance*100)+"%<br>+"+1+"% 成本: "+shortenCosts(player.replicanti.chanceCost)+" 无限点数"
        else document.getElementById("replicantichance").textContent = "复制概率: "+Math.round(player.replicanti.chance*100)+"%"
        let replGalOver = 0
        if (player.timestudy.studies.includes(131)) replGalOver += Math.floor(player.replicanti.gal / 2)
        if (player.timestudy.studies.includes(233)) {
            if (replGalOver !== 0) document.getElementById("replicantimax").innerHTML = "最大复制品星系: "+player.replicanti.gal+"+"+replGalOver+"<br>+1 成本: "+shortenCosts(player.replicanti.galCost.dividedBy(player.replicanti.amount.pow(0.3)))+" 无限点数"
            else document.getElementById("replicantimax").innerHTML = "最大复制品星系: "+player.replicanti.gal+"<br>+1 成本: "+shortenCosts(player.replicanti.galCost.dividedBy(player.replicanti.amount.pow(0.3)))+" 无限点数"
        } else {
            if (replGalOver !== 0) document.getElementById("replicantimax").innerHTML = "最大复制品星系: "+player.replicanti.gal+"+"+replGalOver+"<br>+1 成本: "+shortenCosts(player.replicanti.galCost)+" 无限点数"
            else document.getElementById("replicantimax").innerHTML = "最大复制品星系: "+player.replicanti.gal+"<br>+1 成本: "+shortenCosts(player.replicanti.galCost)+" 无限点数"
        }
        document.getElementById("replicantiunlock").innerHTML = "解锁复制品<br>成本: "+shortenCosts(1e140)+" 无限点数"
        let extraGals = 0
        if (player.timestudy.studies.includes(225)) extraGals += Math.floor(player.replicanti.amount.e / 1000)
        if (player.timestudy.studies.includes(226)) extraGals += Math.floor(player.replicanti.gal / 15)
        if (extraGals !== 0) document.getElementById("replicantireset").innerHTML = "重置复制品数量，但得到一个免费的星系<br>"+player.replicanti.galaxies + "+"+extraGals+ " 复制星系被创建。"
        else document.getElementById("replicantireset").innerHTML = (player.replicanti.galaxies !== 1) ? "重置复制品数量，但得到一个免费的星系<br>"+player.replicanti.galaxies + " 复制品星系被创建." : "重置复制品数量，但得到一个免费的星系<br>"+player.replicanti.galaxies + " 复制品星系被创建."

        document.getElementById("replicantichance").className = (player.infinityPoints.gte(player.replicanti.chanceCost) && player.replicanti.chance < 1) ? "storebtn" : "unavailablebtn"
        document.getElementById("replicantiinterval").className = (player.infinityPoints.gte(player.replicanti.intervalCost) && ((player.replicanti.interval !== 50) || player.timestudy.studies.includes(22)) && (player.replicanti.interval !== 1)) ? "storebtn" : "unavailablebtn"
        document.getElementById("replicantimax").className = (player.infinityPoints.gte(player.replicanti.galCost)) ? "storebtn" : "unavailablebtn"
        document.getElementById("replicantireset").className = ((player.replicanti.galaxies < player.replicanti.gal && player.replicanti.amount.gte(Number.MAX_VALUE)) || (player.replicanti.galaxies < Math.floor(player.replicanti.gal * 1.5) && player.replicanti.amount.gte(Number.MAX_VALUE) && player.timestudy.studies.includes(131))) ? "storebtn" : "unavailablebtn"
        document.getElementById("replicantiunlock").className = (player.infinityPoints.gte(1e140)) ? "storebtn" : "unavailablebtn"
    }

    if (document.getElementById("timestudies").style.display == "block" && document.getElementById("eternitystore").style.display == "block") {
        document.getElementById("11desc").textContent = "当前: "+shortenMoney(Decimal.fromMantissaExponent(10 -player.tickspeed.dividedBy(1000).pow(0.005).times(0.95).plus(player.tickspeed.dividedBy(1000).pow(0.0003).times(0.05)).mantissa, Math.abs(player.tickspeed.dividedBy(1000).pow(0.005).times(0.95).plus(player.tickspeed.dividedBy(1000).pow(0.0003).times(0.05)).e)).min("1e2500").max(1))+"x"
        document.getElementById("32desc").textContent = "你获取无限次数多 "+Math.max(player.resets, 1)+"x 倍 (基于维度提升次数)"
        document.getElementById("51desc").textContent = "你获取无限点数多 "+shortenCosts(1e15)+"x 倍"
        document.getElementById("71desc").textContent = "当前: "+shortenMoney(calcTotalSacrificeBoost().pow(0.25).max(1).min("1e210000"))+"x"
        document.getElementById("72desc").textContent = "当前: "+shortenMoney(calcTotalSacrificeBoost().pow(0.04).max(1).min("1e30000"))+"x"
        document.getElementById("73desc").textContent = "当前: "+shortenMoney(calcTotalSacrificeBoost().pow(0.005).max(1).min("1e1300"))+"x"
        document.getElementById("82desc").textContent = "当前: "+shortenMoney(Decimal.pow(1.0000109, Decimal.pow(player.resets, 2)))+"x"
        document.getElementById("91desc").textContent = "当前: "+shortenMoney(Decimal.pow(10, Math.min(player.thisEternity, 18000)/60))+"x"
        document.getElementById("92desc").textContent = "当前: "+shortenMoney(Decimal.pow(2, 600/Math.max(player.bestEternity, 20)))+"x"
        document.getElementById("93desc").textContent = "当前: "+shortenMoney(Decimal.pow(player.totalTickGained, 0.25))+"x"
        document.getElementById("121desc").textContent = "当前: "+((253 - averageEp.dividedBy(player.epmult).dividedBy(10).min(248).max(3))/5).toFixed(1)+"x"
        document.getElementById("123desc").textContent = "当前: "+Math.sqrt(1.39*player.thisEternity/10).toFixed(1)+"x"
        document.getElementById("141desc").textContent = "当前: "+shortenMoney(new Decimal(1e45).dividedBy(Decimal.pow(15, Math.log(player.thisInfinityTime)*Math.pow(player.thisInfinityTime, 0.125))).max(1))+"x"
        document.getElementById("142desc").textContent = "获得的无限点数乘以 "+shortenCosts(1e25)+"x 倍"
        document.getElementById("143desc").textContent = "当前: "+shortenMoney(Decimal.pow(15, Math.log(player.thisInfinityTime)*Math.pow(player.thisInfinityTime, 0.125)))+"x"
        document.getElementById("151desc").textContent = "所有时间维度倍数乘以 "+shortenCosts(1e4)+"x "
        document.getElementById("161desc").textContent = "所有普通维度倍数乘以 "+shortenCosts(new Decimal("1e616"))+"x"
        document.getElementById("162desc").textContent = "所有无限维度倍数乘以 "+shortenCosts(1e11)+"x "
        document.getElementById("192desc").textContent = "你可以拥有超过 "+shortenMoney(Number.MAX_VALUE)+" 的复制品，但是时间间隔随着数量增长"
        document.getElementById("193desc").textContent = "当前: "+shortenMoney(Decimal.pow(1.03, player.eternities).min("1e13000"))+"x"
        document.getElementById("212desc").textContent = "当前: "+((Math.pow(player.timeShards.max(2).log2(), 0.005)-1)*100).toFixed(2)+"%"
        document.getElementById("214desc").textContent = "当前: "+shortenMoney(((calcTotalSacrificeBoost().pow(8)).min("1e46000").times(calcTotalSacrificeBoost().pow(1.1)).div(calcTotalSacrificeBoost())).max(1).min(new Decimal("1e125000")))+"x"

        if (player.etercreq !== 1) document.getElementById("ec1unl").innerHTML = "永恒挑战 1<span>需要: "+(ECTimesCompleted("eterc1")+1)*20000+" 永恒<span>成本: 30 时间定律"
        else document.getElementById("ec1unl").innerHTML = "永恒挑战 1<span>成本: 30 时间定律"
        if (player.etercreq !== 2) document.getElementById("ec2unl").innerHTML = "永恒挑战 2<span>需要: "+(1300+(ECTimesCompleted("eterc2")*150))+" 从时间维度获得的时刻间隔减少升级<span>成本: 35 时间定律"
        else document.getElementById("ec2unl").innerHTML = "永恒挑战 2<span>成本: 35 时间定律"
        if (player.etercreq !== 3) document.getElementById("ec3unl").innerHTML = "永恒挑战 3<span>需要: "+(17300+(ECTimesCompleted("eterc3")*1250))+" 第八维度<span>成本: 40 时间定律"
        else document.getElementById("ec3unl").innerHTML = "永恒挑战 3<span>成本: 40 时间定律"
        if (player.etercreq !== 4) document.getElementById("ec4unl").innerHTML = "永恒挑战 4<span>需要: "+(1e8 + (ECTimesCompleted("eterc4")*5e7)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" 无限次数<span>成本: 70 时间定律"
        else document.getElementById("ec4unl").innerHTML = "永恒挑战 4<span>成本: 70 时间定律"
        if (player.etercreq !== 5) document.getElementById("ec5unl").innerHTML = "永恒挑战 5<span>需要: "+(160+(ECTimesCompleted("eterc5")*14))+" 星系<span>成本: 130 时间定律"
        else document.getElementById("ec5unl").innerHTML = "永恒挑战 5<span>成本: 130 时间定律"
        if (player.etercreq !== 6) document.getElementById("ec6unl").innerHTML = "永恒挑战 6<span>需要: "+(40+(ECTimesCompleted("eterc6")*5))+" 复制品星系<span>成本: 85 时间定律"
        else document.getElementById("ec6unl").innerHTML = "永恒挑战 6<span>成本: 85 时间定律"
        if (player.etercreq !== 7) document.getElementById("ec7unl").innerHTML = "永恒挑战 7<span>需要: "+shortenCosts(new Decimal("1e500000").times(new Decimal("1e300000").pow(ECTimesCompleted("eterc7"))))+" 反物质 <span>成本: 115 时间定律"
        else document.getElementById("ec7unl").innerHTML = "永恒挑战 7<span>成本: 115 时间定律"
        if (player.etercreq !== 8) document.getElementById("ec8unl").innerHTML = "永恒挑战 8<span>需要: "+shortenCosts(new Decimal("1e4000").times(new Decimal("1e1000").pow(ECTimesCompleted("eterc8"))))+" 无限点数 <span>成本: 115 时间定律"
        else document.getElementById("ec8unl").innerHTML = "永恒挑战 8<span>成本: 115 时间定律"
        if (player.etercreq !== 9) document.getElementById("ec9unl").innerHTML = "永恒挑战 9<span>需要: "+shortenCosts(new Decimal("1e17500").times(new Decimal("1e2000").pow(ECTimesCompleted("eterc9"))))+" 无限力量<span>成本: 415 时间定律"
        else document.getElementById("ec9unl").innerHTML = "永恒挑战 9<span>成本: 415 时间定律"
        if (player.etercreq !== 10) document.getElementById("ec10unl").innerHTML = "永恒挑战 10<span>需要: "+shortenCosts(new Decimal("1e100").times(new Decimal("1e20").pow(ECTimesCompleted("eterc10"))))+" 永恒点数<span>成本: 550 时间定律"
        else document.getElementById("ec10unl").innerHTML = "永恒挑战 10<span>成本: 550 时间定律"

        document.getElementById("ec11unl").innerHTML = "永恒挑战 11<span>需要: 只使用普通维度路线<span>成本: 1 时间定律"
        document.getElementById("ec12unl").innerHTML = "永恒挑战 12<span>需要: 只使用时间维度路线<span>成本: 1 时间定律"

        if (player.dilation.studies.includes(1)) document.getElementById("dilstudy1").innerHTML = "解锁时间膨胀<span>成本: 5000 时间定律"
        else document.getElementById("dilstudy1").innerHTML = "解锁时间膨胀<span>需要: 完成5次永恒挑战11以及12，总共拥有13000时间定律<span>成本: 5000 时间定律"
    }
}



// Replicanti stuff

function unlockReplicantis() {
    if (player.infinityPoints.gte(1e140)) {
        document.getElementById("replicantidiv").style.display="inline-block"
        document.getElementById("replicantiunlock").style.display="none"
        player.replicanti.unl = true
        player.replicanti.amount = new Decimal(1)
        player.infinityPoints = player.infinityPoints.minus(1e140)
    }
}

function upgradeReplicantiChance() {
    if (player.infinityPoints.gte(player.replicanti.chanceCost) && player.replicanti.chance < 1 && player.eterc8repl !== 0) {
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.chanceCost)
        player.replicanti.chanceCost = player.replicanti.chanceCost.times(1e15)
        player.replicanti.chance += 0.01
        if (player.currentEternityChall == "eterc8") player.eterc8repl-=1
        document.getElementById("eterc8repl").textContent = "你有 "+player.eterc8repl+" 剩余购买量."
    }
}



function upgradeReplicantiInterval() {
    if (player.infinityPoints.gte(player.replicanti.intervalCost) && (player.replicanti.interval > 50 || player.timestudy.studies.includes(22)) && player.replicanti.interval !== 1 && player.eterc8repl !== 0) {
        player.infinityPoints = player.infinityPoints.minus(player.replicanti.intervalCost)
        player.replicanti.intervalCost = player.replicanti.intervalCost.times(1e10)
        player.replicanti.interval *= 0.9
        if (!player.timestudy.studies.includes(22) && player.replicanti.interval < 50) player.replicanti.interval = 50
        if (player.timestudy.studies.includes(22) && player.replicanti.interval < 1) player.replicanti.interval = 1
        var places = Math.floor(Math.log10(player.replicanti.interval/1000)) * (-1)
        if (player.currentEternityChall == "eterc8") player.eterc8repl-=1
        document.getElementById("eterc8repl").textContent = "你有 "+player.eterc8repl+" 剩余购买量."
    }
}

function upgradeReplicantiGalaxy() {
    let cost = player.replicanti.galCost
    if (player.timestudy.studies.includes(233)) cost = cost.dividedBy(player.replicanti.amount.pow(0.3))
    if (player.infinityPoints.gte(cost) && player.eterc8repl !== 0) {
        player.infinityPoints = player.infinityPoints.minus(cost)
        if (player.currentEternityChall == "eterc6") player.replicanti.galCost = player.replicanti.galCost.times(Decimal.pow(1e2, player.replicanti.gal)).times(1e2)
        else player.replicanti.galCost = player.replicanti.galCost.times(Decimal.pow(1e5, player.replicanti.gal)).times(1e25)
        if (player.replicanti.gal >= 100) player.replicanti.galCost = player.replicanti.galCost.times(Decimal.pow(1e50, player.replicanti.gal - 95))
        player.replicanti.gal += 1
        if (player.currentEternityChall == "eterc8") player.eterc8repl-=1
        document.getElementById("eterc8repl").textContent = "你有 "+player.eterc8repl+" 剩余购买量."
        return true
    }
    return false
}


function replicantiGalaxy() {
    if (player.replicanti.amount.gte(Number.MAX_VALUE) && (!player.timestudy.studies.includes(131) ? player.replicanti.galaxies < player.replicanti.gal : player.replicanti.galaxies < Math.floor(player.replicanti.gal * 1.5))) {
        if (player.achievements.includes("r126")) player.replicanti.amount = player.replicanti.amount.dividedBy(Number.MAX_VALUE)
        else player.replicanti.amount = new Decimal(1)
        player.replicanti.galaxies += 1
        player.galaxies-=1
        galaxyReset()

    }
}



function updateMilestones() {
    var milestoneRequirements = [1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25, 30, 40, 50, 60, 80, 100]
    for (i=0; i<milestoneRequirements.length; i++) {
        var name = "reward" + i;
        if (player.eternities >= milestoneRequirements[i]) {
            document.getElementById(name).className = "milestonereward"
        } else {
            document.getElementById(name).className = "milestonerewardlocked"
        }
    }
}

function replicantiGalaxyAutoToggle() {
    if (player.replicanti.galaxybuyer) {
        player.replicanti.galaxybuyer = false
        if (player.timestudy.studies.includes(131)) document.getElementById("replicantiresettoggle").textContent = "自动星系关闭 (禁用)"
        else document.getElementById("replicantiresettoggle").textContent = "自动星系关闭"
    } else {
        player.replicanti.galaxybuyer = true
        if (player.timestudy.studies.includes(131)) document.getElementById("replicantiresettoggle").textContent = "自动星系开启 (禁用)"
        else document.getElementById("replicantiresettoggle").textContent = "自动星系开启"
    }
}

function infMultAutoToggle() {
    if (player.infMultBuyer) {
        player.infMultBuyer = false
        document.getElementById("infmultbuyer").textContent = "自动购买无限点倍数 关闭"
    } else {
        player.infMultBuyer = true
        document.getElementById("infmultbuyer").textContent = "自动购买无限点倍数 开启"
    }
}


function toggleCrunchMode() {
    if (player.autoCrunchMode == "amount") {
        player.autoCrunchMode = "time"
        document.getElementById("togglecrunchmode").textContent = "自动坍缩模式:时间"
        document.getElementById("limittext").textContent = "坍缩之间的秒数:"
    } else if (player.autoCrunchMode == "time"){
        player.autoCrunchMode = "relative"
        document.getElementById("togglecrunchmode").textContent = "自动坍缩模式: X 倍无限点数比上一次坍缩"
        document.getElementById("limittext").textContent = "X 倍无限点数比上一次坍缩:"
    } else {
        player.autoCrunchMode = "amount"
        document.getElementById("togglecrunchmode").textContent = "自动坍缩模式:数量"
        document.getElementById("limittext").textContent = "等到可获得这么多无限点数再坍缩:"
    }
}

function toggleEternityConf() {
    if (player.options.eternityconfirm) {
        player.options.eternityconfirm = false
        document.getElementById("eternityconf").textContent = "永恒确认关闭"
    } else {
        player.options.eternityconfirm = true
        document.getElementById("eternityconf").textContent = "永恒确认开启"
    }
}


function toggleReplAuto(i) {
    if (i == "chance") {
        if (player.replicanti.auto[0]) {
            player.replicanti.auto[0] = false
            document.getElementById("replauto1").textContent = "自动: 关闭"
        } else {
            player.replicanti.auto[0] = true
            document.getElementById("replauto1").textContent = "自动: 开启"
        }
    } else if (i == "interval") {
        if (player.replicanti.auto[1]) {
            player.replicanti.auto[1] = false
            document.getElementById("replauto2").textContent = "自动: 关闭"
        } else {
            player.replicanti.auto[1] = true
            document.getElementById("replauto2").textContent = "自动: 开启"
        }
    } else if (i == "galaxy") {
        if (player.replicanti.auto[2]) {
            player.replicanti.auto[2] = false
            document.getElementById("replauto3").textContent = "自动: 关闭"
        } else {
            player.replicanti.auto[2] = true
            document.getElementById("replauto3").textContent = "自动: 开启"
        }
    }
}




function toggleCommas() {
    player.options.commas = !player.options.commas

    if (player.options.commas) document.getElementById("commas").textContent = "指数上的逗号"
    else document.getElementById("commas").textContent = "指数的符号"
}






buyAutobuyer = function(id) {
    if (player.infinityPoints.lt(player.autobuyers[id].cost)) return false;
    if (player.autobuyers[id].bulk >= 1e100) return false;
    player.infinityPoints = player.infinityPoints.minus(player.autobuyers[id].cost);
    if (player.autobuyers[id].interval <= 100) {
        player.autobuyers[id].bulk = Math.min(player.autobuyers[id].bulk * 2, 1e100);
        player.autobuyers[id].cost = Math.ceil(2.4*player.autobuyers[id].cost);
        var b1 = true;
	    for (let i=0;i<8;i++) {
            if (player.autobuyers[i].bulk < 512) b1 = false;
        }
        if (b1) giveAchievement("Bulked up");
    } else {
        player.autobuyers[id].interval = Math.max(player.autobuyers[id].interval*0.6, 100);
        if (player.autobuyers[id].interval > 120) player.autobuyers[id].cost *= 2; //if your last purchase wont be very strong, dont double the cost
    }
    updateAutobuyers();
}

document.getElementById("buyerBtn1").onclick = function () {
    buyAutobuyer(0);
}

document.getElementById("buyerBtn2").onclick = function () {

    buyAutobuyer(1);
}

document.getElementById("buyerBtn3").onclick = function () {
    buyAutobuyer(2);
}

document.getElementById("buyerBtn4").onclick = function () {
    buyAutobuyer(3);
}

document.getElementById("buyerBtn5").onclick = function () {
    buyAutobuyer(4);
}

document.getElementById("buyerBtn6").onclick = function () {
    buyAutobuyer(5);
}

document.getElementById("buyerBtn7").onclick = function () {
    buyAutobuyer(6);
}

document.getElementById("buyerBtn8").onclick = function () {
    buyAutobuyer(7);
}

document.getElementById("buyerBtnTickSpeed").onclick = function () {
    buyAutobuyer(8);
}

document.getElementById("buyerBtnDimBoost").onclick = function () {
    buyAutobuyer(9);
}

document.getElementById("buyerBtnGalaxies").onclick = function () {
    buyAutobuyer(10);
}

document.getElementById("buyerBtnInf").onclick = function () {
    buyAutobuyer(11);
}

toggleAutobuyerTarget = function(id) {
    if (player.autobuyers[id-1].target == id) {
        player.autobuyers[id-1].target = 10 + id
        document.getElementById("toggleBtn" + id).textContent = "购买到10"
    } else {
        player.autobuyers[id-1].target = id
        document.getElementById("toggleBtn" + id).textContent = "购买单次"
    }
}

document.getElementById("toggleBtn1").onclick = function () {
    toggleAutobuyerTarget(1)
}

document.getElementById("toggleBtn2").onclick = function () {
    toggleAutobuyerTarget(2)
}

document.getElementById("toggleBtn3").onclick = function () {
    toggleAutobuyerTarget(3)
}

document.getElementById("toggleBtn4").onclick = function () {
    toggleAutobuyerTarget(4)
}

document.getElementById("toggleBtn5").onclick = function () {
    toggleAutobuyerTarget(5)
}

document.getElementById("toggleBtn6").onclick = function () {
    toggleAutobuyerTarget(6)
}

document.getElementById("toggleBtn7").onclick = function () {
    toggleAutobuyerTarget(7)
}

document.getElementById("toggleBtn8").onclick = function () {
    toggleAutobuyerTarget(8)
}

document.getElementById("toggleBtnTickSpeed").onclick = function () {
    if (player.autobuyers[8].target == 1) {
        player.autobuyers[8].target = 10
        document.getElementById("toggleBtnTickSpeed").textContent = "购买最大"
    } else {
        player.autobuyers[8].target = 1
        document.getElementById("toggleBtnTickSpeed").textContent = "购买单次"
    }
}















document.getElementById("secondSoftReset").onclick = function() {
    if (player.currentEternityChall == "eterc6") return
    var bool = player.currentChallenge != "challenge11" && player.currentChallenge != "postc1" && player.currentChallenge != "postc7" && (player.break || player.money.lte(Number.MAX_VALUE))
    if (player.currentChallenge == "challenge4" ? player.sixthAmount >= getGalaxyRequirement() && bool : player.eightAmount >= getGalaxyRequirement() && bool) {
        if (player.eternities >= 7 && !shiftDown) maxBuyGalaxies(true);
        else galaxyReset();
    }
}

function setInitialDimensionPower () {
  player.firstPow = getDimensionBoostPower().pow(player.resets)
  player.secondPow = getDimensionBoostPower().pow(player.resets - 1).max(1)
  player.thirdPow = getDimensionBoostPower().pow(player.resets - 2).max(1)
  player.fourthPow = getDimensionBoostPower().pow(player.resets - 3).max(1)
  player.fifthPow = getDimensionBoostPower().pow(player.resets - 4).max(1)
  player.sixthPow = getDimensionBoostPower().pow(player.resets - 5).max(1)
  player.seventhPow = getDimensionBoostPower().pow(player.resets - 6).max(1)
  player.eightPow = getDimensionBoostPower().pow(player.resets - 7).max(1)
}

function galaxyReset() {

    if (autoS) auto = false;
    autoS = true;
    if (player.sacrificed == 0) giveAchievement("I don't believe in Gods");
    player = {
        money: player.achievements.includes("r111") ? player.money : new Decimal(10),
        tickSpeedCost: new Decimal(1000),
        tickspeed: new Decimal(1000),
        firstCost: new Decimal(10),
        secondCost: new Decimal(100),
        thirdCost: new Decimal(10000),
        fourthCost: new Decimal(1000000),
        fifthCost: new Decimal(1e9),
        sixthCost: new Decimal(1e13),
        seventhCost: new Decimal(1e18),
        eightCost: new Decimal(1e24),
        firstAmount: new Decimal(0),
        secondAmount: new Decimal(0),
        thirdAmount: new Decimal(0),
        fourthAmount: new Decimal(0),
        firstBought: 0,
        secondBought: 0,
        thirdBought: 0,
        fourthBought: 0,
        fifthAmount: new Decimal(0),
        sixthAmount: new Decimal(0),
        seventhAmount: new Decimal(0),
        eightAmount: new Decimal(0),
        fifthBought: 0,
        sixthBought: 0,
        seventhBought: 0,
        eightBought: 0,
        firstPow: new Decimal(1),
        secondPow: new Decimal(1),
        thirdPow: new Decimal(1),
        fourthPow: new Decimal(1),
        fifthPow: new Decimal(1),
        sixthPow: new Decimal(1),
        seventhPow: new Decimal(1),
        eightPow: new Decimal(1),
        sacrificed: new Decimal(0),
        achievements: player.achievements,
        challenges: player.challenges,
        currentChallenge: player.currentChallenge,
        infinityUpgrades: player.infinityUpgrades,
        infinityPoints: player.infinityPoints,
        infinitied: player.infinitied,
        infinitiedBank: player.infinitiedBank,
        totalTimePlayed: player.totalTimePlayed,
        bestInfinityTime: player.bestInfinityTime,
        thisInfinityTime: player.thisInfinityTime,
        resets: 0,
        galaxies: player.galaxies + 1,
        totalmoney: player.totalmoney,
        tickDecrease: player.tickDecrease - 0.03,
        interval: null,
        lastUpdate: player.lastUpdate,
        achPow: player.achPow,
        newsArray: player.newsArray,
        autobuyers: player.autobuyers,
        costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
        tickspeedMultiplier: new Decimal(10),
        chall2Pow: player.chall2Pow,
        chall3Pow: new Decimal(0.01),
        matter: new Decimal(0),
        chall11Pow: new Decimal(1),
        partInfinityPoint: player.partInfinityPoint,
        partInfinitied: player.partInfinitied,
        break: player.break,
        challengeTimes: player.challengeTimes,
        infchallengeTimes: player.infchallengeTimes,
        lastTenRuns: player.lastTenRuns,
        lastTenEternities: player.lastTenEternities,
        infMult: player.infMult,
        infMultCost: player.infMultCost,
        tickSpeedMultDecrease: player.tickSpeedMultDecrease,
        tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
        dimensionMultDecrease: player.dimensionMultDecrease,
        dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
        version: player.version,
        overXGalaxies: player.overXGalaxies,
        spreadingCancer: player.spreadingCancer,
        infDimensionsUnlocked: player.infDimensionsUnlocked,
        infinityPower: player.infinityPower,
        postChallUnlocked: player.postChallUnlocked,
        postC4Tier: 1,
        postC3Reward: new Decimal(1),
        infinityDimension1: player.infinityDimension1,
        infinityDimension2: player.infinityDimension2,
        infinityDimension3: player.infinityDimension3,
        infinityDimension4: player.infinityDimension4,
        infinityDimension5: player.infinityDimension5,
        infinityDimension6: player.infinityDimension6,
        infinityDimension7: player.infinityDimension7,
        infinityDimension8: player.infinityDimension8,
        infDimBuyers: player.infDimBuyers,
        timeShards: player.timeShards,
        tickThreshold: player.tickThreshold,
        timeDimension1: player.timeDimension1,
        timeDimension2: player.timeDimension2,
        timeDimension3: player.timeDimension3,
        timeDimension4: player.timeDimension4,
        timeDimension5: player.timeDimension5,
        timeDimension6: player.timeDimension6,
        timeDimension7: player.timeDimension7,
        timeDimension8: player.timeDimension8,
        eternityPoints: player.eternityPoints,
        eternities: player.eternities,
        thisEternity: player.thisEternity,
        bestEternity: player.bestEternity,
        eternityUpgrades: player.eternityUpgrades,
        epmult: player.epmult,
        epmultCost: player.epmultCost,
        totalTickGained: player.totalTickGained,
        offlineProd: player.offlineProd,
        offlineProdCost: player.offlineProdCost,
        challengeTarget: player.challengeTarget,
        autoSacrifice: player.autoSacrifice,
        replicanti: player.replicanti,
        timestudy: player.timestudy,
        eternityChalls: player.eternityChalls,
        eternityChallGoal: player.eternityChallGoal,
        currentEternityChall: player.currentEternityChall,
        eternityChallUnlocked: player.eternityChallUnlocked,
        etercreq: player.etercreq,
        autoIP: player.autoIP,
        autoTime: player.autoTime,
        infMultBuyer: player.infMultBuyer,
        autoCrunchMode: player.autoCrunchMode,
        respec: player.respec,
        eternityBuyer: player.eternityBuyer,
        eterc8ids: player.eterc8ids,
        eterc8repl: player.eterc8repl,
        dimlife: player.dimlife,
        dead: player.dead,
        dilation: player.dilation,
        why: player.why,
        options: player.options
    };

    if (player.currentChallenge == "challenge10" || player.currentChallenge == "postc1") {
        player.thirdCost = new Decimal(100)
        player.fourthCost = new Decimal(500)
        player.fifthCost = new Decimal(2500)
        player.sixthCost = new Decimal(2e4)
        player.seventhCost = new Decimal(2e5)
        player.eightCost = new Decimal(4e6)
    }

    if (player.resets == 0 && player.currentChallenge == "") {
        if (player.infinityUpgrades.includes("skipReset1")) player.resets++;
        if (player.infinityUpgrades.includes("skipReset2")) player.resets++;
        if (player.infinityUpgrades.includes("skipReset3")) player.resets++;
        if (player.infinityUpgrades.includes("skipResetGalaxy")) {
            player.resets++;
            if (player.galaxies == 0) player.galaxies = 1
        }
    }
    if (player.currentChallenge == "postc2") {
        player.eightAmount = new Decimal(1);
        player.eightBought = 1;
        player.resets = 4;
    }

    setInitialDimensionPower();


    if (player.options.notation == "Emojis") player.spreadingCancer+=1;
    if (player.spreadingCancer >= 10) giveAchievement("Spreading Cancer")
    if (player.spreadingCancer >= 1000000) giveAchievement("Cancer = Spread")
    if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95,player.galaxies));

    if (player.eternities < 30) {
        document.getElementById("secondRow").style.display = "none";
        document.getElementById("thirdRow").style.display = "none";
        document.getElementById("tickSpeed").style.visibility = "hidden";
        document.getElementById("tickSpeedMax").style.visibility = "hidden";
        document.getElementById("tickLabel").style.visibility = "hidden";
        document.getElementById("tickSpeedAmount").style.visibility = "hidden";
        document.getElementById("fourthRow").style.display = "none";
        document.getElementById("fifthRow").style.display = "none";
        document.getElementById("sixthRow").style.display = "none";
        document.getElementById("seventhRow").style.display = "none";
        document.getElementById("eightRow").style.display = "none";
    }

    if (player.galaxies >= 50) giveAchievement("YOU CAN GET 50 GALAXIES!??")
    if (player.galaxies >= 2) giveAchievement("Double Galaxy");
    if (player.galaxies >= 1) giveAchievement("You got past The Big Wall");
    if (player.challenges.includes("challenge1")) player.money = new Decimal(100).max(player.money)
    if (player.achievements.includes("r37")) player.money = new Decimal(1000).max(player.money);
    if (player.achievements.includes("r54")) player.money = new Decimal(2e5).max(player.money);
    if (player.achievements.includes("r55")) player.money = new Decimal(1e10).max(player.money);
    if (player.achievements.includes("r78")) player.money = new Decimal(1e25).max(player.money);
    player.tickspeed = player.tickspeed.times(Decimal.pow(getTickSpeedMultiplier(), player.totalTickGained))
    if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);
    if (player.galaxies >= 540 && player.replicanti.galaxies == 0) giveAchievement("Unique snowflakes")
    updateTickSpeed();
};

document.getElementById("exportbtn").onclick = function () {
    let output = document.getElementById('exportOutput');
    let parent = output.parentElement;

    parent.style.display = "";
    output.value = btoa(JSON.stringify(player, function(k, v) { return (v === Infinity) ? "Infinity" : v; }));

    output.onblur = function() {
        parent.style.display = "none";
    }

    output.focus();
    output.select();

    try {
        if (document.execCommand('copy')) {
            $.notify("已导出到剪贴板", "info");
            output.blur();
        }
    } catch(ex) {
        // well, we tried.
    }
};


document.getElementById("save").onclick = function () {
    saved++
    if (saved > 99) giveAchievement("Just in case")
    save_game();
};

document.getElementById("load").onclick = function () {
    closeToolTip();
	for (var i = 0; i < 3; i++) {
		var _break = player.break;
        player.break = true;
        if (currentSave === i) document.querySelector("#save" + (i + 1) + " .save_antimatter").textContent = "反物质: " + shortenMoney(player.money);
        else document.querySelector("#save" + (i + 1) + " .save_antimatter").textContent = "反物质: " + shortenMoney(saves[i] ? new Decimal(saves[i].money) : 10);
		player.break = _break;
	}

	document.querySelectorAll(".save_selected").forEach(function(el) {
		el.style.display = "none";
	});

	document.querySelector("#save" + (currentSave + 1) + " .save_selected").style.display = "inline";

    document.getElementById("loadmenu").style.display = "flex";
};

document.getElementById("animationoptionsbtn").onclick = function () {
    closeToolTip();
    document.getElementById("animationoptions").style.display = "flex";
};

function verify_save(obj) {
    if (typeof obj != 'object') return false;


    return true;
}

document.getElementById("importbtn").onclick = function () {
    var save_data = prompt("导入你的存档. (你当前的游戏进度将会被覆盖，请记得备份存档。)");
    if (save_data.constructor !== String) save_data = "";
    if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === "80b7fdc794f5dfc944da6a445a3f21a2d0f7c974d044f2ea25713037e96af9e3") {
        document.getElementById("body").style.animation = "barrelRoll 5s 1";
        giveAchievement("Do a barrel roll!")
        setTimeout(function(){ document.getElementById("body").style.animation = ""; }, 5000)
    } else if (sha512_256(save_data.replace(/\s/g, '').toUpperCase()) === "857876556a230da15fe1bb6f410ca8dbc9274de47c1a847c2281a7103dd2c274") giveAchievement("So do I");
    else if (sha512_256(save_data) === "de24687ee7ba1acd8f5dc8f71d41a3d4b7f14432fff53a4d4166e7eea48a88c0") {
        player.options.theme = "S1";
        player.options.secretThemeKey = save_data;
        setTheme(player.options.theme);
    } else if (sha512_256(save_data) === "76269d18c05c9ebec8a990a096cee046dea042a0421f8ab81d17f34dd1cdbdbf") {
        player.options.theme = "S2";
        player.options.secretThemeKey = save_data;
        setTheme(player.options.theme);
    } else if (sha512_256(save_data) === "d764e9a1d1e18081be19f3483b537ae1159ab40d10e096df1d9e857d68d6ba7a") {
        player.options.theme = "S3";
        player.options.secretThemeKey = save_data;
        setTheme(player.options.theme);
    } else if (sha512_256(save_data) === "ae0199482ecfa538a03eb37c67866e67a11f1832516c26c7939e971e514d40c5") {
        player.options.theme = "S4";
        player.options.secretThemeKey = save_data;
        setTheme(player.options.theme);
    }  else if (sha512_256(save_data) === "7a668b64cdfe1bcdf7a38d3858429ee21290268de66b9784afba27dc5225ce28") {
        player.options.theme = "S5";
        player.options.secretThemeKey = save_data;
        setTheme(player.options.theme);
    } else {
        save_data = JSON.parse(atob(save_data), function(k, v) { return (v === Infinity) ? "Infinity" : v; });
        if(verify_save(save_data)) forceHardReset = true
        if(verify_save(save_data)) document.getElementById("reset").click();
        forceHardReset = false
        if (!save_data || !verify_save(save_data)) {
            alert('不能加载此存档..');
            load_custom_game();
            return;
		}
        saved = 0;
        totalMult = 1
        currentMult = 1
        infinitiedMult = 1
        achievementMult = 1
        challengeMult = 1
        unspentBonus = 1
        infDimPow = 1
        postc8Mult = new Decimal(0)
        mult18 = new Decimal(1)
        ec10bonus = new Decimal(1)
        player = save_data;
        save_game();
        load_game();
        updateChallenges()
        transformSaveToDecimal()
    }
};




document.getElementById("reset").onclick = function () {
    if (forceHardReset) {
        if (window.location.href.split("//")[1].length > 20) set_save('dimensionTestSave', currentSave, defaultStart);
        else set_save('dimensionSave', currentSave, defaultStart);
        player = defaultStart
        infDimPow = 1;
        save_game();
        load_game();
        updateCosts();

        document.getElementById("secondRow").style.display = "none";
        document.getElementById("thirdRow").style.display = "none";
        document.getElementById("tickSpeed").style.visibility = "hidden";
        document.getElementById("tickSpeedMax").style.visibility = "hidden";
        document.getElementById("tickLabel").style.visibility = "hidden";
        document.getElementById("tickSpeedAmount").style.visibility = "hidden";
        document.getElementById("fourthRow").style.display = "none";
        document.getElementById("fifthRow").style.display = "none";
        document.getElementById("sixthRow").style.display = "none";
        document.getElementById("seventhRow").style.display = "none";
        document.getElementById("eightRow").style.display = "none";
        showDimTab('antimatterdimensions')
        updateTickSpeed();
        updateDimensions();
        updateChallenges();
        updateAutobuyers();
    } else if (confirm("Do you really want to erase all your progress?")) {
        if (window.location.href.split("//")[1].length > 20) set_save('dimensionTestSave', currentSave, defaultStart);
        else set_save('dimensionSave', currentSave, defaultStart);
        player = defaultStart
        infDimPow = 1;
        save_game();
        load_game();
        updateCosts();

        document.getElementById("secondRow").style.display = "none";
        document.getElementById("thirdRow").style.display = "none";
        document.getElementById("tickSpeed").style.visibility = "hidden";
        document.getElementById("tickSpeedMax").style.visibility = "hidden";
        document.getElementById("tickLabel").style.visibility = "hidden";
        document.getElementById("tickSpeedAmount").style.visibility = "hidden";
        document.getElementById("fourthRow").style.display = "none";
        document.getElementById("fifthRow").style.display = "none";
        document.getElementById("sixthRow").style.display = "none";
        document.getElementById("seventhRow").style.display = "none";
        document.getElementById("eightRow").style.display = "none";
        showDimTab('antimatterdimensions')
        updateTickSpeed();
        updateDimensions();
        updateChallenges();
        updateAutobuyers();
    }
};


function breakInfinity() {
    if (player.autobuyers[11]%1 === 0 || player.autobuyers[11].interval>100) return false
    if (player.break && !player.currentChallenge.includes("post")) {
        player.break = false
        document.getElementById("break").textContent = "突破无限"
    } else {
        player.break = true
        document.getElementById("break").textContent = "修复无限"
        giveAchievement("Limit Break")
    }
}

function gainedInfinityPoints() {
    let div = 308;
    if (player.timestudy.studies.includes(111)) div = 285;
    else if (player.achievements.includes("r103")) div = 307.8;

    var ret = Decimal.pow(10, player.money.e/div -0.75).times(player.infMult).times(kongIPMult)
    if (player.timestudy.studies.includes(41)) ret = ret.times(Decimal.pow(1.2, player.galaxies + player.replicanti.galaxies))
    if (player.timestudy.studies.includes(51)) ret = ret.times(1e15)
    if (player.timestudy.studies.includes(141)) ret = ret.times(new Decimal(1e45).dividedBy(Decimal.pow(15, Math.log(player.thisInfinityTime+1)*Math.pow(player.thisInfinityTime+1, 0.125))).max(1))
    if (player.timestudy.studies.includes(142)) ret = ret.times(1e25)
    if (player.timestudy.studies.includes(143)) ret = ret.times(Decimal.pow(15, Math.log(player.thisInfinityTime+1)*Math.pow(player.thisInfinityTime+1, 0.125)))
    if (player.achievements.includes("r116")) ret = ret.times(Decimal.pow(2, Math.log10(getInfinitied()+1)))
    if (player.achievements.includes("r125")) ret = ret.times(Decimal.pow(2, Math.log(player.thisInfinityTime+1)*Math.pow(player.thisInfinityTime+1, 0.11)))
    if (player.dilation.upgrades.includes(7)) ret = ret.times(player.dilation.dilatedTime.pow(1000))
    return ret.floor()
}

function gainedEternityPoints() {
    var ret = Decimal.pow(5, player.infinityPoints.plus(gainedInfinityPoints()).e/308 -0.7).times(player.epmult).times(kongEPMult)
    if (player.timestudy.studies.includes(61)) ret = ret.times(10)
    if (player.timestudy.studies.includes(121)) ret = ret.times(((253 - averageEp.dividedBy(player.epmult).dividedBy(10).min(248).max(3))/5)) //x300 if tryhard, ~x60 if not
    else if (player.timestudy.studies.includes(122)) ret = ret.times(35)
    else if (player.timestudy.studies.includes(123)) ret = ret.times(Math.sqrt(1.39*player.thisEternity/10))

    return ret.floor()
}


function setAchieveTooltip() {
    var apocAchieve = document.getElementById("Antimatter Apocalypse");
    var noPointAchieve = document.getElementById("There's no point in doing that");
    var sanic = document.getElementById("Supersanic")
    var forgotAchieve = document.getElementById("I forgot to nerf that")
    var potato = document.getElementById("Faster than a potato")
    let potato2 = document.getElementById("Faster than a squared potato")
    let potato3 = document.getElementById("Faster than a potato^286078")
    var dimensional = document.getElementById("Multidimensional")
    var IPBelongs = document.getElementById("All your IP are belong to us")
    var reference = document.getElementById("Yet another infinity reference")
    let blink = document.getElementById("Blink of an eye")
    let exist = document.getElementById("This achievement doesn't exist")
    let exist2 = document.getElementById("This achievement doesn't exist II")
    let spare = document.getElementById("I got a few to spare")
    let speed = document.getElementById("Ludicrous Speed")
    let speed2 = document.getElementById("I brake for nobody")
    let overdrive = document.getElementById("MAXIMUM OVERDRIVE")
    let minute = document.getElementById("Minute of infinity")
    let infiniteIP = document.getElementById("Can you get infinite IP?")
    let over9000 = document.getElementById("IT'S OVER 9000")
    let dawg = document.getElementById("Yo dawg, I heard you liked infinities...")
    let eatass = document.getElementById("Like feasting on a behind")
    let layer = document.getElementById("But I wanted another prestige layer...")
    let fkoff = document.getElementById("What do I have to do to get rid of you")
    let minaj = document.getElementById("Popular music")
    let infstuff = document.getElementById("I never liked this infinity stuff anyway")
    let when = document.getElementById("When will it be enough?")
    let thinking = document.getElementById("Now you're thinking with dilation!")
    let thisis = document.getElementById("This is what I have to do to get rid of you.")

    apocAchieve.setAttribute('ach-tooltip', "拥有超过 " + formatValue(player.options.notation, 1e80, 0, 0) + " 反物质。");
    noPointAchieve.setAttribute('ach-tooltip', "当你拥有超过 " + formatValue(player.options.notation, 1e150, 0, 0) + " 个第一维度时，再买一个。 奖励: 第一维度增强10%。");
    forgotAchieve.setAttribute('ach-tooltip', "使任意维度倍数超过 " + formatValue(player.options.notation, 1e31, 0, 0)) + "。 奖励: 第一维度增强5%。";
    sanic.setAttribute('ach-tooltip', "每秒反物质产量超出你拥有的反物质 " + formatValue(player.options.notation, 1e63, 0, 0));
    potato.setAttribute('ach-tooltip', "每秒时刻超过" + formatValue(player.options.notation, 1e29, 0, 0) + "。 奖励: 时刻间隔减少2%。");
    potato2.setAttribute('ach-tooltip', "每秒时刻超过" + formatValue(player.options.notation, 1e58, 0, 0) + "。 奖励: 时刻间隔减少2%。");
    potato3.setAttribute('ach-tooltip', "每秒时刻超过"+shortenCosts(new Decimal("1e8296262"))+"。")
    dimensional.setAttribute('ach-tooltip', "除第八维度外所有维度拥有 " + formatValue(player.options.notation, 1e12, 0, 0) + " 。");
    IPBelongs.setAttribute('ach-tooltip', "一次大坍缩获得 "+shortenCosts(1e150)+" 无限点数。 奖励: 无限点数倍数额外x4。")
    reference.setAttribute('ach-tooltip', "一次维度献祭获得 x"+shortenDimensions(Number.MAX_VALUE)+" 的乘数。 奖励: 增强维度献祭效果。")
    blink.setAttribute('ach-tooltip', "200ms内到达无限。 奖励: 开始时拥有 " + formatValue(player.options.notation, 1e25, 0, 0) + " 反物质，并且在一轮的前300ms所有维度增强。");
    spare.setAttribute('ach-tooltip', "拥有 " +formatValue(player.options.notation, new Decimal("1e35000"), 0, 0)+" 反物质。 奖励: 未使用的反物质越多，维度就越强。");
    //exist.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 9.9999e9999, 0, 0) + " antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have."); (i like the 9 9s thing and no one will see it with a formatted value)
    //exist2.setAttribute('ach-tooltip', "Reach " + formatValue(player.options.notation, 1e35000, 0, 0) + " antimatter. Reward: Dimensions are more powerful the more unspent antimatter you have.")
    speed.setAttribute('ach-tooltip', "2秒内大坍缩并获得 "+shortenCosts(1e200)+" 无限点数。 奖励：每次无限的前5秒内所有维度显著增强。")
    speed2.setAttribute('ach-tooltip', "20秒内大坍缩并获得 "+shortenCosts(1e250)+" 无限点数。 奖励：每次无限的前60秒内所有维度显著增强。")
    overdrive.setAttribute('ach-tooltip', "大坍缩并超过 " + shortenCosts(1e300) + " 无限点数/分钟。 奖励：无限点数倍数额外x4。")
    minute.setAttribute('ach-tooltip', "拥有 " + shortenCosts(1e260) + " 无限力量。 奖励: 无限力量获取翻倍。")
    infiniteIP.setAttribute('ach-tooltip', "拥有 "+shortenCosts(new Decimal("1e30008"))+" 无限点数。")
    over9000.setAttribute('ach-tooltip', "总共获得 "+shortenCosts(new Decimal("1e9000"))+"的维度献祭倍数。 奖励：维度献祭不会重置你的维度数量。")
    dawg.setAttribute('ach-tooltip', "你过去的10次无限，每一个都比前一次获得无限点数高 "+shortenMoney(Number.MAX_VALUE)+" 倍。 奖励：维度提升以及购买星系反物质不会重置")
    eatass.setAttribute('ach-tooltip', "拥有 "+shortenCosts(1e100)+" 无限点数且没有到达无限，也没有第一维度。奖励：基于本次无限花费的时间给予无限点数倍数。")
    layer.setAttribute('ach-tooltip', "拥有 "+shortenMoney(Number.MAX_VALUE)+" 永恒点数。")
    fkoff.setAttribute('ach-tooltip', "拥有 "+shortenCosts(new Decimal("1e22000"))+" 无限点数，并没有任何时间研究。奖励：时间维度的倍数乘以你拥有的时间研究的数量。")
    minaj.setAttribute('ach-tooltip', "复制星系(不包括获取的额外复制星系)数量超过普通星系数量的180倍。奖励：获取一个复制星系时会使复制品数量除以 "+shortenMoney(Number.MAX_VALUE)+" ，而不是将它们重置为1。")
    infstuff.setAttribute('ach-tooltip', "达到 "+shortenCosts(new Decimal("1e140000"))+" 无限点数，且不购买无限维度、无限点数翻倍。 奖励: 开始永恒时所有无限挑战解锁并完成。")
    when.setAttribute('ach-tooltip', "拥有 "+shortenCosts( new Decimal("1e20000"))+" 复制品。 奖励：在复制品数量低于 "+shortenMoney(Number.MAX_VALUE)+" 时获取速度翻倍。")
    thinking.setAttribute('ach-tooltip', "在时间膨胀中1分钟内永恒，并获取 "+shortenCosts( new Decimal("1e600"))+" 永恒点数。")
    thisis.setAttribute('ach-tooltip', "在一次时间膨胀中没有时间研究，并获取 "+shortenCosts(new Decimal('1e20000'))+" 无限点数。")
}

document.getElementById("notation").onclick = function () {
    player.options.scientific = !player.options.scientific;
    if (player.options.notation === "Infinity") {
        player.options.notation = "Scientific";
        document.getElementById("notation").textContent = ("数字格式: 科学格式")
    } else if (player.options.notation === "Scientific") {
        player.options.notation = "Engineering";
        document.getElementById("notation").textContent = ("数字格式: 工程格式")
    } else if (player.options.notation === "Engineering") {
        player.options.notation = "Letters";
        document.getElementById("notation").textContent = ("数字格式: 字母格式")
    } else if (player.options.notation === "Letters") {
        player.options.notation = "Standard";
        document.getElementById("notation").textContent = ("数字格式: 标准格式")
    } else if (player.options.notation === "Standard") {
        player.options.notation = "Emojis";
        document.getElementById("notation").textContent = ("数字格式: Cancer")
    } else if (player.options.notation === "Emojis") {
        player.options.notation = "Mixed scientific";
        document.getElementById("notation").textContent = ("数字格式: 混合科学格式")
    } else if (player.options.notation === "Mixed scientific") {
        player.options.notation = "Mixed engineering";
        document.getElementById("notation").textContent = ("数字格式: 混合工程格式")
    } else if (player.options.notation === "Mixed engineering") {
        player.options.notation = "Logarithm";
        document.getElementById("notation").textContent = ("数字格式: 对数格式")
    } else if (player.options.notation === "Logarithm") {
        player.options.notation = "Brackets";
        document.getElementById("notation").textContent = ("数字格式: 括号格式")
    } else if (player.options.notation === "Brackets") {
      player.options.notation = "Infinity";
      document.getElementById("notation").textContent = ("数字格式: 无限格式")
    }

    updateLastTenRuns();
    updateLastTenEternities();
    updateTickSpeed();
    setAchieveTooltip();
    updateCosts();
    updateDilationUpgradeCosts()
    document.getElementById("epmult").innerHTML = "You gain 5 times more EP<p>Currently: "+shortenDimensions(player.epmult)+"x<p>Cost: "+shortenDimensions(player.epmultCost)+" EP"
};


document.getElementById("newsbtn").onclick = function() {
  if (!player.options.newsHidden) {
    document.getElementById("game").style.display = "none";
    player.options.newsHidden = true
  } else {
    document.getElementById("game").style.display = "block";
    player.options.newsHidden = false
    scrollNextMessage()
  }
}


function resetDimensions() {
    var tiers = [ null, "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eight" ];

    for (i = 1; i <= 8; i++) {
        player[tiers[i] + "Amount"] = new Decimal(0)
        player[tiers[i] + "Pow"] = new Decimal(1)
    }
    player.firstCost = new Decimal(10)
    player.secondCost = new Decimal(100)
    player.thirdCost = new Decimal(10000)
    player.fourthCost = new Decimal(1e6)
    player.fifthCost = new Decimal(1e9)
    player.sixthCost = new Decimal(1e13)
    player.seventhCost = new Decimal(1e18)
    player.eightCost = new Decimal(1e24)
    player.eightPow = new Decimal(player.chall11Pow)
}

function calcSacrificeBoost() {
    if (player.firstAmount == 0) return new Decimal(1);
    if (player.challenges.includes("postc2")) {
        if (player.timestudy.studies.includes(228)) return player.firstAmount.dividedBy(player.sacrificed.max(1)).pow(0.013).max(1)
        if (player.achievements.includes("r88")) return player.firstAmount.dividedBy(player.sacrificed.max(1)).pow(0.011).max(1)
        return player.firstAmount.dividedBy(player.sacrificed.max(1)).pow(0.01).max(1)
    }
    if (player.currentChallenge != "challenge11") {
        var sacrificePow=2;
        if (player.achievements.includes("r32")) sacrificePow += 0.2;
        if (player.achievements.includes("r57")) sacrificePow += 0.2; //this upgrade was too OP lol
        return Decimal.pow((player.firstAmount.e/10.0), sacrificePow).dividedBy(((Decimal.max(player.sacrificed.e, 1)).dividedBy(10.0)).pow(sacrificePow).max(1)).max(1);
    } else {
        return player.firstAmount.pow(0.05).dividedBy(player.sacrificed.pow(0.04).max(1)).max(1);
    }
}

function calcTotalSacrificeBoost() {
    if (player.sacrificed == 0) return new Decimal(1);
    if (player.challenges.includes("postc2")) {
        if (player.timestudy.studies.includes(228)) return player.sacrificed.pow(0.013).max(1)
        if (player.achievements.includes("r88")) return player.sacrificed.pow(0.011).max(1)
        else return player.sacrificed.pow(0.01)
    }
    if (player.currentChallenge != "challenge11") {
        var sacrificePow=2;
        if (player.achievements.includes("r32")) sacrificePow += 0.2;
        if (player.achievements.includes("r57")) sacrificePow += 0.2;
        return Decimal.pow((player.sacrificed.e/10.0), sacrificePow);
    } else {
        return player.sacrificed.pow(0.05) //this is actually off but like im not sure how youd make it good. not that it matters.
    }
}


function sacrifice(auto = false) {
    if (player.eightAmount == 0) return false;
    if (player.resets < 5) return false
    if (player.currentEternityChall == "eterc3") return false
    if (player.currentChallenge == "challenge11" && (calcTotalSacrificeBoost().gte(Number.MAX_VALUE) || player.chall11Pow.gte(Number.MAX_VALUE))) return false
    if (!auto) floatText("eightD", "x" + shortenMoney(calcSacrificeBoost()))
    if (calcSacrificeBoost().gte(Number.MAX_VALUE)) giveAchievement("Yet another infinity reference");
    player.eightPow = player.eightPow.times(calcSacrificeBoost())
    player.sacrificed = player.sacrificed.plus(player.firstAmount);
    if (player.currentChallenge != "challenge11") {
        if (player.currentChallenge == "challenge7" && !player.achievements.includes("r118")) clearDimensions(6);
        else if (!player.achievements.includes("r118")) clearDimensions(7);
    } else {
        player.chall11Pow = player.chall11Pow.times(calcSacrificeBoost())
        if (!player.achievements.includes("r118")) resetDimensions();
        player.money = new Decimal(100)

    }
    if (calcTotalSacrificeBoost() >= 600) giveAchievement("The Gods are pleased");
    if (calcTotalSacrificeBoost().gte("1e9000")) giveAchievement("IT'S OVER 9000");
}




document.getElementById("sacrifice").onclick = function () {
    if (!document.getElementById("confirmation").checked) {
        if (!confirm("维度献祭将移除所有第一到第七维度（成本和倍数保持不变），以提升到第八维度。 重新获得生产需要时间。")) {
            return false;
        }
    }

    auto = false;
    return sacrifice();
}


function updateAutobuyers() {
    var autoBuyerDim1 = new Autobuyer (1)
    var autoBuyerDim2 = new Autobuyer (2)
    var autoBuyerDim3 = new Autobuyer (3)
    var autoBuyerDim4 = new Autobuyer (4)
    var autoBuyerDim5 = new Autobuyer (5)
    var autoBuyerDim6 = new Autobuyer (6)
    var autoBuyerDim7 = new Autobuyer (7)
    var autoBuyerDim8 = new Autobuyer (8)
    var autoBuyerDimBoost = new Autobuyer (9)
    var autoBuyerGalaxy = new Autobuyer (document.getElementById("secondSoftReset"))
    var autoBuyerTickspeed = new Autobuyer (document.getElementById("tickSpeed"))
    var autoBuyerInf = new Autobuyer (document.getElementById("bigcrunch"))
    var autoSacrifice = new Autobuyer(13)


    autoBuyerDim1.interval = 1500
    autoBuyerDim2.interval = 2000
    autoBuyerDim3.interval = 2500
    autoBuyerDim4.interval = 3000
    autoBuyerDim5.interval = 4000
    autoBuyerDim6.interval = 5000
    autoBuyerDim7.interval = 6000
    autoBuyerDim8.interval = 7500
    autoBuyerDimBoost.interval = 8000
    autoBuyerGalaxy.interval = 150000
    autoBuyerTickspeed.interval = 5000
    autoBuyerInf.interval = 300000

    autoSacrifice.interval = 100
    autoSacrifice.priority = 5

    autoBuyerDim1.tier = 1
    autoBuyerDim2.tier = 2
    autoBuyerDim3.tier = 3
    autoBuyerDim4.tier = 4
    autoBuyerDim5.tier = 5
    autoBuyerDim6.tier = 6
    autoBuyerDim7.tier = 7
    autoBuyerDim8.tier = 8
    autoBuyerTickSpeed.tier = 9

    if (player.challenges.includes("challenge1") && player.autobuyers[0] == 1) {
        player.autobuyers[0] = autoBuyerDim1
        document.getElementById("autoBuyer1").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge2") && player.autobuyers[1] == 2) {
        player.autobuyers[1] = autoBuyerDim2
        document.getElementById("autoBuyer2").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge3") && player.autobuyers[2] == 3) {
        player.autobuyers[2] = autoBuyerDim3
        document.getElementById("autoBuyer3").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge4") && player.autobuyers[9] == 10) {
        player.autobuyers[9] = autoBuyerDimBoost
        document.getElementById("autoBuyerDimBoost").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge5") && player.autobuyers[8] == 9) {
        player.autobuyers[8] = autoBuyerTickspeed
        document.getElementById("autoBuyerTickSpeed").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge6") && player.autobuyers[4] == 5) {
        player.autobuyers[4] = autoBuyerDim5
        document.getElementById("autoBuyer5").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge7") && player.autobuyers[11] == 12) {
        player.autobuyers[11] = autoBuyerInf
        document.getElementById("autoBuyerInf").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge8") && player.autobuyers[3] == 4) {
        player.autobuyers[3] = autoBuyerDim4
        document.getElementById("autoBuyer4").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge9") && player.autobuyers[6] == 7) {
        player.autobuyers[6] = autoBuyerDim7
        document.getElementById("autoBuyer7").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge10") && player.autobuyers[5] == 6) {
        player.autobuyers[5] = autoBuyerDim6
        document.getElementById("autoBuyer6").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge11") && player.autobuyers[7] == 8) {
        player.autobuyers[7] = autoBuyerDim8
        document.getElementById("autoBuyer8").style.display = "inline-block"
    }
    if (player.challenges.includes("challenge12") && player.autobuyers[10] == 11) {
        player.autobuyers[10] = autoBuyerGalaxy
        document.getElementById("autoBuyerGalaxies").style.display = "inline-block"
    }

    if (player.challenges.includes("postc2") && player.autoSacrifice == 1) {
        player.autoSacrifice = autoSacrifice
        document.getElementById("autoBuyerSac").style.display = "inline-block"
    } else {
        document.getElementById("autoBuyerSac").style.display = "none"
    }

    if (player.eternities < 100) {
        document.getElementById("autoBuyerEter").style.display = "none"
    }

    if (player.infinityUpgrades.includes("autoBuyerUpgrade")) {
        document.getElementById("interval1").textContent = "当前时间间隔: " + (player.autobuyers[0].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval2").textContent = "当前时间间隔: " + (player.autobuyers[1].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval3").textContent = "当前时间间隔: " + (player.autobuyers[2].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval4").textContent = "当前时间间隔: " + (player.autobuyers[3].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval5").textContent = "当前时间间隔: " + (player.autobuyers[4].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval6").textContent = "当前时间间隔: " + (player.autobuyers[5].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval7").textContent = "当前时间间隔: " + (player.autobuyers[6].interval/2000).toFixed(2) + " 秒"
        document.getElementById("interval8").textContent = "当前时间间隔: " + (player.autobuyers[7].interval/2000).toFixed(2) + " 秒"
        document.getElementById("intervalTickSpeed").textContent = "当前时间间隔: " + (player.autobuyers[8].interval/2000).toFixed(2) + " 秒"
        document.getElementById("intervalDimBoost").textContent = "当前时间间隔: " + (player.autobuyers[9].interval/2000).toFixed(2) + " 秒"
        document.getElementById("intervalGalaxies").textContent = "当前时间间隔: " + (player.autobuyers[10].interval/2000).toFixed(2) + " 秒"
        document.getElementById("intervalInf").textContent = "当前时间间隔: " + (player.autobuyers[11].interval/2000).toFixed(2) + " 秒"
        document.getElementById("intervalSac").textContent = "当前时间间隔: 0.05 秒"
    } else {
        document.getElementById("interval1").textContent = "当前时间间隔: " + (player.autobuyers[0].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval2").textContent = "当前时间间隔: " + (player.autobuyers[1].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval3").textContent = "当前时间间隔: " + (player.autobuyers[2].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval4").textContent = "当前时间间隔: " + (player.autobuyers[3].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval5").textContent = "当前时间间隔: " + (player.autobuyers[4].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval6").textContent = "当前时间间隔: " + (player.autobuyers[5].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval7").textContent = "当前时间间隔: " + (player.autobuyers[6].interval/1000).toFixed(2) + " 秒"
        document.getElementById("interval8").textContent = "当前时间间隔: " + (player.autobuyers[7].interval/1000).toFixed(2) + " 秒"
        document.getElementById("intervalTickSpeed").textContent = "当前时间间隔: " + (player.autobuyers[8].interval/1000).toFixed(2) + " 秒"
        document.getElementById("intervalDimBoost").textContent = "当前时间间隔: " + (player.autobuyers[9].interval/1000).toFixed(2) + " 秒"
        document.getElementById("intervalGalaxies").textContent = "当前时间间隔: " + (player.autobuyers[10].interval/1000).toFixed(2) + " 秒"
        document.getElementById("intervalInf").textContent = "当前时间间隔: " + (player.autobuyers[11].interval/1000).toFixed(2) + " 秒"
        document.getElementById("intervalSac").textContent = "当前时间间隔: 0.10 秒"
    }

    var maxedAutobuy = 0;
    var e100autobuy = 0;
    for (let tier = 1; tier <= 8; ++tier) {
    document.getElementById("toggleBtn" + tier).style.display = "inline-block";
        if (player.autobuyers[tier-1].bulk >= 1e100) {
        player.autobuyers[tier-1].bulk = 1e100;
        document.getElementById("buyerBtn" + tier).textContent = shortenDimensions(player.autobuyers[tier-1].bulk)+"x 批量购买";
        e100autobuy++;
        }
        else {
        if (player.autobuyers[tier-1].interval <= 100) {
            if (player.autobuyers[tier-1].bulk * 2 >= 1e100) {
                document.getElementById("buyerBtn" + tier).innerHTML = shortenDimensions(1e100)+"x 批量购买<br>花费: " + shortenDimensions(player.autobuyers[tier-1].cost) + " 无限点数";
            }
            else {
                document.getElementById("buyerBtn" + tier).innerHTML = shortenDimensions(player.autobuyers[tier-1].bulk*2)+"x 批量购买<br>花费: " + shortenDimensions(player.autobuyers[tier-1].cost) + " 无限点数";
            }
            maxedAutobuy++;
        }
        else document.getElementById("buyerBtn" + tier).innerHTML = "时间间隔减少40% <br>花费: " + shortenDimensions(player.autobuyers[tier-1].cost) + " 无限点数"
        }
    }

    if (player.autobuyers[8].interval <= 100) {
        document.getElementById("buyerBtnTickSpeed").style.display = "none"
        document.getElementById("toggleBtnTickSpeed").style.display = "inline-block"
        maxedAutobuy++;
    }
    if (player.autobuyers[9].interval <= 100) {
        document.getElementById("buyerBtnDimBoost").style.display = "none"
        maxedAutobuy++;
    }
    if (player.autobuyers[10].interval <= 100) {
        document.getElementById("buyerBtnGalaxies").style.display = "none"
        maxedAutobuy++;
    }
    if (player.autobuyers[11].interval <= 100) {
        document.getElementById("buyerBtnInf").style.display = "none"
        maxedAutobuy++;
    }

    if (maxedAutobuy >= 9) giveAchievement("Age of Automation");
    if (maxedAutobuy >= 12) giveAchievement("Definitely not worth it");
    if (e100autobuy >= 8) giveAchievement("Professional bodybuilder");

    document.getElementById("buyerBtnTickSpeed").innerHTML = "时间间隔减少40% <br>花费: " + player.autobuyers[8].cost + " 无限点数"
    document.getElementById("buyerBtnDimBoost").innerHTML = "时间间隔减少40% <br>花费: " + player.autobuyers[9].cost + " 无限点数"
    document.getElementById("buyerBtnGalaxies").innerHTML = "时间间隔减少40% <br>花费: " + player.autobuyers[10].cost + " 无限点数"
    document.getElementById("buyerBtnInf").innerHTML = "时间间隔减少40% <br>花费: " + player.autobuyers[11].cost + " 无限点数"


    for (var i=0; i<8; i++) {
        if (player.autobuyers[i]%1 !== 0) document.getElementById("autoBuyer"+(i+1)).style.display = "inline-block"
    }
    if (player.autobuyers[8]%1 !== 0) document.getElementById("autoBuyerTickSpeed").style.display = "inline-block"
    if (player.autobuyers[9]%1 !== 0) document.getElementById("autoBuyerDimBoost").style.display = "inline-block"
    if (player.autobuyers[10]%1 !== 0) document.getElementById("autoBuyerGalaxies").style.display = "inline-block"
    if (player.autobuyers[11]%1 !== 0) document.getElementById("autoBuyerInf").style.display = "inline-block"
    if (player.autoSacrifice%1 !== 0) document.getElementById("autoBuyerSac").style.display = "inline-block"

    for (var i=1; i<=12; i++) {
        player.autobuyers[i-1].isOn = document.getElementById(i + "ison").checked;
    }

    player.autoSacrifice.isOn = document.getElementById("13ison").checked
    player.eternityBuyer.isOn = document.getElementById("eternityison").checked
    priorityOrder()
}


/*function loadAutoBuyers() {
    for (var i=0; i<12; i++) {
        if (player.autobuyers[i]%1 !== 0 ) {
            switch(i) {
                case 8: player.autobuyers[i].target = "buyTickSpeed()";
                case 9: player.autobuyers[i].target = "document.getElementById('softReset').click";
                case 10: player.autobuyers[i].target = "document.getElementById('secondSoftReset').click";
                case 11: player.autobuyers[i].target = "document.getElementById('bigcrunch').click";
                default: player.autobuyers[i].target = "buyOneDimension(" + i+1 + ")";
            }
        }
    }

}*/


function autoBuyerArray() {
    var tempArray = []
    for (var i=0; i<player.autobuyers.length && i<9; i++) {
        if (player.autobuyers[i]%1 !== 0 ) {
            tempArray.push(player.autobuyers[i])
        }
    }
    return tempArray;
}


var priority = []


function priorityOrder() {
    var tempArray = []
    var i = 1;
    while(tempArray.length != autoBuyerArray().length) {

        for (var x=0 ; x< autoBuyerArray().length; x++) {
            if (autoBuyerArray()[x].priority == i) tempArray.push(autoBuyerArray()[x])
        }
        i++;
    }
    priority = tempArray;
}

function fromValue(value) {
  value = value.replace(/,/g, '')
  if (value.toUpperCase().split("E").length > 2 && value.split(" ")[0] !== value) {
      var temp = new Decimal(0)
      temp.mantissa = parseFloat(value.toUpperCase().split("E")[0])
      temp.exponent = parseFloat(value.toUpperCase().split("E")[1]+"e"+value.toUpperCase().split("E")[2])
      value = temp.toString()
  }
  if (value.includes(" ")) {
    const prefixes = [['', 'U', 'D', 'T', 'Qa', 'Qt', 'Sx', 'Sp', 'O', 'N'],
    ['', 'Dc', 'Vg', 'Tg', 'Qd', 'Qi', 'Se', 'St', 'Og', 'Nn'],
    ['', 'Ce', 'Dn', 'Tc', 'Qe', 'Qu', 'Sc', 'Si', 'Oe', 'Ne']]
    const prefixes2 = ['', 'MI', 'MC', 'NA', 'PC', 'FM', ' ']
    let e = 0;
    let m,k,l;
    if (value.split(" ")[1].length < 5) {
        for (l=101;l>0;l--) {
            if (value.includes(FormatList[l])) {
                e += l*3
                console.log("caught!"+l)

                break
            }
        }
        return Decimal.fromMantissaExponent(parseInt(value.split(" ")[0]), e)
    }
    for (let i=1;i<5;i++) {
        if (value.includes(prefixes2[i])) {
            m = value.split(prefixes2[i])[1]
            for (k=0;k<3;k++) {
                for (l=1;l<10;l++) {
                    if (m.includes(prefixes[k][l])) break;
                }
                if (l != 10) e += Math.pow(10,k)*l;
            }
            break;
        }
        return Decimal.fromMantissaExponent(value.split, e*3)
    }
    for (let i=1;i<=5;i++) {
        if (value.includes(prefixes2[i])) {
            for (let j=1;j+i<6;j++) {
                if (value.includes(prefixes2[i+j])) {
                    m=value.split(prefixes2[i+j])[1].split(prefixes2[i])[0]
                    if (m == "") e += Math.pow(1000,i);
                    else {
                        for (k=0;k<3;k++) {
                            for (l=1;l<10;l++) {
                                if (m.includes(prefixes[k][l])) break;
                            }
                            if (l != 10) e += Math.pow(10,k+i*3)*l;
                        }
                    }
                    break;
                }
            }
        }
    }
    return Decimal.fromMantissaExponent(parseFloat(value), i*3+3)
    //return parseFloat(value) + "e" + (e*3+3)
  }
  if (!isFinite(parseFloat(value[value.length-1]))) { //needs testing
    const l = " abcdefghijklmnopqrstuvwxyz"
    const v = value.replace(parseFloat(value),"")
    let e = 0;
    for (let i=0;i<v.length;i++) {
        for (let j=1;j<27;j++) {
            if (v[i] == l[j]) e += Math.pow(26,v.length-i-1)*j
        }
    }
    return Decimal.fromMantissaExponent(parseFloat(value), e*3)
    //return parseFloat(value) + "e" + (e*3)
  }
  value = value.replace(',','')
  if (value.split("e")[0] === "") return Decimal.fromMantissaExponent(Math.pow(10,parseFloat(value.split("e")[1])%1), parseInt(value.split("e")[1]))
  return Decimal.fromString(value)
}

function updatePriorities() {
    auto = false;
    for (var x=0 ; x < autoBuyerArray().length; x++) {
        if (x < 9) autoBuyerArray()[x].priority = parseInt(document.getElementById("priority" + (x+1)).value)
    }
    if (parseInt(document.getElementById("priority10").value) === 69
    || parseInt(document.getElementById("priority11").value) === 69
    || parseInt(fromValue(document.getElementById("priority12").value).toString()) === 69
    || parseInt(document.getElementById("bulkDimboost").value) === 69
    || parseInt(document.getElementById("overGalaxies").value) === 69
    || parseInt(fromValue(document.getElementById("prioritySac").value).toString()) === 69
    || parseInt(document.getElementById("bulkgalaxy").value) === 69
    || parseInt(fromValue(document.getElementById("priority13").value).toString()) === 69) giveAchievement("Nice.");
    player.autobuyers[9].priority = parseInt(document.getElementById("priority10").value)
    player.autobuyers[10].priority = parseInt(document.getElementById("priority11").value)
    player.autobuyers[11].priority = fromValue(document.getElementById("priority12").value)
    if (player.eternities < 10) {
        var bulk = Math.floor(Math.max(parseFloat(document.getElementById("bulkDimboost").value), 1))
    } else {
        var bulk = Math.max(parseFloat(document.getElementById("bulkDimboost").value), 0.05)
    }
    player.autobuyers[9].bulk = (isNaN(bulk)) ? 1 : bulk
    player.overXGalaxies = parseInt(document.getElementById("overGalaxies").value)
    player.autoSacrifice.priority = fromValue(document.getElementById("prioritySac").value)
    if (isNaN(player.autoSacrifice.priority) || player.autoSacrifice.priority === null || player.autoSacrifice.priority === undefined || player.autoSacrifice.priority <= 1) player.autoSacrifice.priority = Decimal.fromNumber(1.01)
    player.autobuyers[10].bulk = parseFloat(document.getElementById("bulkgalaxy").value)
    const eterValue = fromValue(document.getElementById("priority13").value)
    if (!isNaN(eterValue)) player.eternityBuyer.limit = eterValue

    priorityOrder()
}

function updateCheckBoxes() {
    for (var i = 0; i < 12; i++) {
        if (player.autobuyers[i]%1 !== 0) {
            if (player.autobuyers[i].isOn) document.getElementById((i+1) + "ison").checked = "true";
            else document.getElementById((i+1) + "ison").checked = ""
        }
    }
    if (player.autoSacrifice.isOn) document.getElementById("13ison").checked = "true"
    else document.getElementById("13ison").checked = ""
    document.getElementById("eternityison").checked = player.eternityBuyer.isOn

}


function toggleAutoBuyers() {
    var bool = player.autobuyers[0].isOn
    for (var i = 0; i<12; i++) {
        if (player.autobuyers[i]%1 !== 0) {
            player.autobuyers[i].isOn = !bool
        }
    }
    player.autoSacrifice.isOn = !bool
    player.eternityBuyer.isOn = !bool
    updateCheckBoxes()
    updateAutobuyers()
}

function toggleBulk() {

    if (player.options.bulkOn) {
        player.options.bulkOn = false
        document.getElementById("togglebulk").textContent = "启用批量购买"
    } else {
        player.options.bulkOn = true
        document.getElementById("togglebulk").textContent = "禁用批量购买"
    }
}

function toggleHotkeys() {
    if (player.options.hotkeys) {
        player.options.hotkeys = false
        document.getElementById("hotkeys").textContent = "开启快捷键"
    } else {
        player.options.hotkeys = true
        document.getElementById("hotkeys").textContent = "禁用快捷键"
    }
}








function updateChallengeTimes() {
document.getElementById("challengetime2").textContent = "挑战 " + 2 + " 时间记录: " + timeDisplayShort(player.challengeTimes[0])
    document.getElementById("challengetime3").textContent = "挑战 " + 3 + " 时间记录: " + timeDisplayShort(player.challengeTimes[1])
    document.getElementById("challengetime4").textContent = "挑战 " + 4 + " 时间记录: " + timeDisplayShort(player.challengeTimes[6])
    document.getElementById("challengetime5").textContent = "挑战 " + 5 + " 时间记录: " + timeDisplayShort(player.challengeTimes[4])
    document.getElementById("challengetime6").textContent = "挑战 " + 6 + " 时间记录: " + timeDisplayShort(player.challengeTimes[8])
    document.getElementById("challengetime7").textContent = "挑战 " + 7 + " 时间记录: " + timeDisplayShort(player.challengeTimes[7])
    document.getElementById("challengetime8").textContent = "挑战 " + 8 + " 时间记录: " + timeDisplayShort(player.challengeTimes[9])
    document.getElementById("challengetime9").textContent = "挑战 " + 9 + " 时间记录: " + timeDisplayShort(player.challengeTimes[3])
    document.getElementById("challengetime10").textContent = "挑战" + 10 + " 时间记录: " + timeDisplayShort(player.challengeTimes[2])
    document.getElementById("challengetime11").textContent = "挑战" + 11 + " 时间记录: " + timeDisplayShort(player.challengeTimes[10])
    document.getElementById("challengetime12").textContent = "挑战" + 12 + " 时间记录: " + timeDisplayShort(player.challengeTimes[5])
	var temp = 0
	for (var i=0; i<11; i++) {
		temp += player.challengeTimes[i]
	}
	document.getElementById("challengetimesum").textContent = "挑战通过时间总和为 " + timeDisplayShort(temp)

	temp = 0
    for (var i=0; i<8; i++) {
        document.getElementById("infchallengetime"+(i+1)).textContent = "无限挑战 " + (i+1) + " 时间记录: " + timeDisplayShort(player.infchallengeTimes[i])
		temp += player.infchallengeTimes[i]
    }
	document.getElementById("infchallengetimesum").textContent = "无限挑战通过时间总和为 " + timeDisplayShort(temp)
    updateWorstChallengeTime();
}

var bestRunIppm = new Decimal(0)
function updateLastTenRuns() {
    let tempBest = 0
    var tempTime = new Decimal(0)
    var tempIP = new Decimal(0)
    for (var i=0; i<10;i++) {
        tempTime = tempTime.plus(player.lastTenRuns[i][0])
        tempIP = tempIP.plus(player.lastTenRuns[i][1])
    }
    tempTime = tempTime.dividedBy(10)
    tempIP = tempIP.dividedBy(10)
    for (var i=0; i<10; i++) {
        var ippm = player.lastTenRuns[i][1].dividedBy(player.lastTenRuns[i][0]/600)
        if (ippm.gt(tempBest)) tempBest = ippm
        var tempstring = shorten(ippm) + " 无限点数/分钟"
        if (ippm<1) tempstring = shorten(ippm*60) + " 无限点数/小时"
        document.getElementById("run"+(i+1)).textContent = ""+(i+1)+"次前的无限花费了 " + timeDisplayShort(player.lastTenRuns[i][0]) + " 并获得 " + shortenDimensions(player.lastTenRuns[i][1]) +" 无限点数。 "+ tempstring
    }

    var ippm = tempIP.dividedBy(tempTime/600)
    var tempstring = shorten(ippm) + " 无限点数/分钟"
    if (ippm<1) tempstring = shorten(ippm*60) + " 无限点数/小时"
    document.getElementById("averagerun").textContent = "前10次无限的平均时间: "+ timeDisplayShort(tempTime)+" 平均无限点数获得: "+shortenDimensions(tempIP)+" 无限点数。 "+tempstring

    if (tempBest.gte(1e8)) giveAchievement("Oh hey, you're still here");
    if (tempBest.gte(1e300)) giveAchievement("MAXIMUM OVERDRIVE");

    bestRunIppm = tempBest
}

var averageEp = new Decimal(0)
function updateLastTenEternities() {
    let tempBest = 0
    var tempTime = new Decimal(0)
    var tempEP = new Decimal(0)
    for (var i=0; i<10;i++) {
        tempTime = tempTime.plus(player.lastTenEternities[i][0])
        tempEP = tempEP.plus(player.lastTenEternities[i][1])
    }
    tempTime = tempTime.dividedBy(10)
    tempEP = tempEP.dividedBy(10)
    for (var i=0; i<10; i++) {
        var eppm = player.lastTenEternities[i][1].dividedBy(player.lastTenEternities[i][0]/600)
        if (eppm.gt(tempBest)) tempBest = eppm
        var tempstring = shorten(eppm) + " 永恒点数/分钟"
        if (eppm<1) tempstring = shorten(eppm*60) + " 永恒点数/小时"
        document.getElementById("eternityrun"+(i+1)).textContent = ""+(i+1)+" 次前的永恒花费了 " + timeDisplayShort(player.lastTenEternities[i][0]) + " 并且获得了 " + shortenDimensions(player.lastTenEternities[i][1]) +" 永恒点数。 "+ tempstring
    }

    var eppm = tempEP.dividedBy(tempTime/600)
    var tempstring = shorten(eppm) + " 永恒点数/分钟"
    averageEp = tempEP
    if (eppm<1) tempstring = shorten(eppm*60) + " 永恒点数/小时"
    document.getElementById("averageEternityRun").textContent = "前十次永恒的平均时间: "+ timeDisplayShort(tempTime)+" 平均永恒点数获得: "+shortenDimensions(tempEP)+" 永恒点数。 "+tempstring
}

function addEternityTime(time, ep) {
    for (var i=player.lastTenEternities.length-1; i>0; i--) {
        player.lastTenEternities[i] = player.lastTenEternities[i-1]
    }
    player.lastTenEternities[0] = [time, ep]
}


document.getElementById("postInfinityButton").onclick = function() {document.getElementById("bigcrunch").click()}

function addTime(time, ip) {
    for (var i=player.lastTenRuns.length-1; i>0; i--) {
        player.lastTenRuns[i] = player.lastTenRuns[i-1]
    }
    player.lastTenRuns[0] = [time, ip]
}

var infchallengeTimes = 999999999

function checkForEndMe() {
    var temp = 0
    for (var i=0; i<11; i++) {
        temp += player.challengeTimes[i]
    }
    if (temp <= 1800) giveAchievement("Not-so-challenging")
    if (temp <= 50) giveAchievement("End me")
    var temp2 = 0
    for (var i=0; i<8;i++) {
        temp2 += player.infchallengeTimes[i]
    }
    infchallengeTimes = temp2
    if (temp2 <= 66.6) giveAchievement("Yes. This is hell.")
}


document.getElementById("bigcrunch").onclick = function () {
    var challNumber = parseInt(player.currentChallenge[player.currentChallenge.length-1])
    if (player.currentChallenge.length == 11) challNumber = parseInt("1"+player.currentChallenge[player.currentChallenge.length-1])
    if ((player.money.gte(Number.MAX_VALUE) && !player.currentChallenge.includes("post")) || (player.currentChallenge !== "" && player.money.gte(player.challengeTarget))) {
        if ((player.bestInfinityTime > 600 && !player.break) && player.eternities === 0 && implosionCheck === 0 && player.options.animations.bigCrunch) {
            implosionCheck = 1;
            document.getElementById("body").style.animation = "implode 2s 1";
            setTimeout(function(){ document.getElementById("body").style.animation = ""; }, 2000)
            setTimeout(function(){ document.getElementById("bigcrunch").onclick(); }, 1000)
            return
        }
        implosionCheck = 0;
        if (player.thisInfinityTime <= 72000) giveAchievement("That's fast!");
        if (player.thisInfinityTime <= 6000) giveAchievement("That's faster!")
        if (player.thisInfinityTime <= 600) giveAchievement("Forever isn't that long")
        if (player.thisInfinityTime <= 2) giveAchievement("Blink of an eye")
        if (player.eightAmount == 0) giveAchievement("You didn't need it anyway");
        if (player.galaxies == 1) giveAchievement("Claustrophobic");
        if (player.galaxies == 0 && player.resets == 0) giveAchievement("Zero Deaths")
        if (player.currentChallenge == "challenge2" && player.thisInfinityTime <= 1800) giveAchievement("Many Deaths")
        if (player.currentChallenge == "challenge11" && player.thisInfinityTime <= 1800) giveAchievement("Gift from the Gods")
        if (player.currentChallenge == "challenge5" && player.thisInfinityTime <= 1800) giveAchievement("Is this hell?")
        if (player.currentChallenge == "challenge3" && player.thisInfinityTime <= 100) giveAchievement("You did this again just for the achievement right?");
        if (player.firstAmount == 1 && player.resets == 0 && player.galaxies == 0 && player.currentChallenge == "challenge12") giveAchievement("ERROR 909: Dimension not found")
        if (player.currentChallenge != "" && player.challengeTimes[challNumber-2] > player.thisInfinityTime) player.challengeTimes[challNumber-2] = player.thisInfinityTime
        if (player.currentChallenge.includes("post") && player.infchallengeTimes[challNumber-1] > player.thisInfinityTime) player.infchallengeTimes[challNumber-1] = player.thisInfinityTime
        if (player.currentChallenge == "postc5" && player.thisInfinityTime <= 100) giveAchievement("Hevipelle did nothing wrong")
        if ((player.bestInfinityTime > 600 && !player.break) || (player.currentChallenge != "" && !player.options.retryChallenge)) showTab("dimensions")
        if (player.currentChallenge == "challenge5") {
            kong.submitStats('Challenge 9 time record (ms)', Math.floor(player.thisInfinityTime*100));
        }
        if (player.currentChallenge != "" && !player.challenges.includes(player.currentChallenge)) {
            player.challenges.push(player.currentChallenge);
        }
        if (player.challenges.length > 12) giveAchievement("Infinitely Challenging");
        if (player.challenges.length == 20) giveAchievement("Anti-antichallenged");
        if (!player.break || player.currentChallenge != "") {
            var add = new Decimal(player.infMult.times(kongIPMult))
            if (player.timestudy.studies.includes(51)) add = add.times(1e15)
            player.infinityPoints = player.infinityPoints.plus(add);
            addTime(player.thisInfinityTime, add)
        }
        else {
            player.infinityPoints = player.infinityPoints.plus(gainedInfinityPoints())
            addTime(player.thisInfinityTime, gainedInfinityPoints())
            if (gainedInfinityPoints().gte(1e150)) giveAchievement("All your IP are belong to us")
            if (gainedInfinityPoints().gte(1e200) && player.thisInfinityTime <= 20) giveAchievement("Ludicrous Speed")
            if (gainedInfinityPoints().gte(1e250) && player.thisInfinityTime <= 200) giveAchievement("I brake for nobody")
        }
        if (!player.achievements.includes("r111") && player.lastTenRuns[9][1] != 1) {
            var n = 0;
            for (i=0; i<9; i++) {
                if (player.lastTenRuns[i][1].gte(player.lastTenRuns[i+1][1].times(Number.MAX_VALUE))) n++;
            }
            if (n == 9) giveAchievement("Yo dawg, I heard you liked infinities...")
        }
        let infGain = 1;
        if (player.thisInfinityTime > 50 && player.achievements.includes("r87")) infGain = 250;
        if (player.timestudy.studies.includes(32)) infGain *= Math.max(player.resets,1);
        if (player.currentEternityChall == "eterc4") {
            infGain = 1
            if (player.infinitied >= 16 - (ECTimesCompleted("eterc4")*4)) {
                document.getElementById("challfail").style.display = "block"
                setTimeout(exitChallenge, 500)
                giveAchievement("You're a mistake")
                failureCount++
                if (failureCount > 9) giveAchievement("You're a failure")
            }
        }
        if (autoS && auto) {
          if (gainedInfinityPoints().dividedBy(player.thisInfinityTime).gt(player.autoIP) && !player.break) player.autoIP = gainedInfinityPoints().dividedBy(player.thisInfinityTime);
          if (player.thisInfinityTime<player.autoTime) player.autoTime = player.thisInfinityTime;
        }
        auto = autoS; //only allow autoing if prev crunch was autoed
        autoS = true;
        player = {
            money: new Decimal(10),
            tickSpeedCost: new Decimal(1000),
            tickspeed: new Decimal(1000),
            firstCost: new Decimal(10),
            secondCost: new Decimal(100),
            thirdCost: new Decimal(10000),
            fourthCost: new Decimal(1000000),
            fifthCost: new Decimal(1e9),
            sixthCost: new Decimal(1e13),
            seventhCost: new Decimal(1e18),
            eightCost: new Decimal(1e24),
            firstAmount: new Decimal(0),
            secondAmount: new Decimal(0),
            thirdAmount: new Decimal(0),
            fourthAmount: new Decimal(0),
            firstBought: 0,
            secondBought: 0,
            thirdBought: 0,
            fourthBought: 0,
            fifthAmount: new Decimal(0),
            sixthAmount: new Decimal(0),
            seventhAmount: new Decimal(0),
            eightAmount: new Decimal(0),
            fifthBought: 0,
            sixthBought: 0,
            seventhBought: 0,
            eightBought: 0,
            firstPow: new Decimal(1),
            secondPow: new Decimal(1),
            thirdPow: new Decimal(1),
            fourthPow: new Decimal(1),
            fifthPow: new Decimal(1),
            sixthPow: new Decimal(1),
            seventhPow: new Decimal(1),
            eightPow: new Decimal(1),
            sacrificed: new Decimal(0),
            achievements: player.achievements,
            challenges: player.challenges,
            currentChallenge: player.currentChallenge,
            infinityUpgrades: player.infinityUpgrades,
            infinityPoints: player.infinityPoints,
            infinitied: player.infinitied + infGain,
            infinitiedBank: player.infinitiedBank,
            totalTimePlayed: player.totalTimePlayed,
            bestInfinityTime: Math.min(player.bestInfinityTime, player.thisInfinityTime),
            thisInfinityTime: 0,
            resets: 0,
            galaxies: 0,
            tickDecrease: 0.9,
            totalmoney: player.totalmoney,
            interval: null,
            lastUpdate: player.lastUpdate,
            achPow: player.achPow,
            autobuyers: player.autobuyers,
            costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
            tickspeedMultiplier: new Decimal(10),
            chall2Pow: 1,
            chall3Pow: new Decimal(0.01),
            newsArray: player.newsArray,
            matter: new Decimal(0),
            chall11Pow: new Decimal(1),
            partInfinityPoint: player.partInfinityPoint,
            partInfinitied: player.partInfinitied,
            break: player.break,
            challengeTimes: player.challengeTimes,
            infchallengeTimes: player.infchallengeTimes,
            lastTenRuns: player.lastTenRuns,
            lastTenEternities: player.lastTenEternities,
            infMult: player.infMult,
            infMultCost: player.infMultCost,
            tickSpeedMultDecrease: player.tickSpeedMultDecrease,
            tickSpeedMultDecreaseCost: player.tickSpeedMultDecreaseCost,
            dimensionMultDecrease: player.dimensionMultDecrease,
            dimensionMultDecreaseCost: player.dimensionMultDecreaseCost,
            version: player.version,
            postChallUnlocked: player.postChallUnlocked,
            postC4Tier: 1,
            postC3Reward: new Decimal(1),
            overXGalaxies: player.overXGalaxies,
            spreadingCancer: player.spreadingCancer,
            infDimensionsUnlocked: player.infDimensionsUnlocked,
            infinityPower: player.infinityPower,
            infinityDimension1: player.infinityDimension1,
            infinityDimension2: player.infinityDimension2,
            infinityDimension3: player.infinityDimension3,
            infinityDimension4: player.infinityDimension4,
            infinityDimension5: player.infinityDimension5,
            infinityDimension6: player.infinityDimension6,
            infinityDimension7: player.infinityDimension7,
            infinityDimension8: player.infinityDimension8,
            infDimBuyers: player.infDimBuyers,
            timeShards: player.timeShards,
            tickThreshold: player.tickThreshold,
            timeDimension1: player.timeDimension1,
            timeDimension2: player.timeDimension2,
            timeDimension3: player.timeDimension3,
            timeDimension4: player.timeDimension4,
            timeDimension5: player.timeDimension5,
            timeDimension6: player.timeDimension6,
            timeDimension7: player.timeDimension7,
            timeDimension8: player.timeDimension8,
            eternityPoints: player.eternityPoints,
            eternities: player.eternities,
            thisEternity: player.thisEternity,
            bestEternity: player.bestEternity,
            eternityUpgrades: player.eternityUpgrades,
            epmult: player.epmult,
            epmultCost: player.epmultCost,
            totalTickGained: player.totalTickGained,
            offlineProd: player.offlineProd,
            offlineProdCost: player.offlineProdCost,
            challengeTarget: player.challengeTarget,
            autoSacrifice: player.autoSacrifice,
            replicanti: player.replicanti,
            timestudy: player.timestudy,
            eternityChalls: player.eternityChalls,
            eternityChallGoal: player.eternityChallGoal,
            currentEternityChall: player.currentEternityChall,
            eternityChallUnlocked: player.eternityChallUnlocked,
            etercreq: player.etercreq,
            autoIP: player.autoIP,
            autoTime: player.autoTime,
            infMultBuyer: player.infMultBuyer,
            autoCrunchMode: player.autoCrunchMode,
            respec: player.respec,
            eternityBuyer: player.eternityBuyer,
            eterc8ids: player.eterc8ids,
            eterc8repl: player.eterc8repl,
            dimlife: player.dimlife,
            dead: player.dead,
            dilation: player.dilation,
            why: player.why,
            options: player.options
        };

        if (player.bestInfinityTime <= 0.01) giveAchievement("Less than or equal to 0.001");

        if (!player.options.retryChallenge) player.currentChallenge = ""

        if (player.resets == 0 && player.currentChallenge == "") {
            if (player.infinityUpgrades.includes("skipReset1")) player.resets++;
            if (player.infinityUpgrades.includes("skipReset2")) player.resets++;
            if (player.infinityUpgrades.includes("skipReset3")) player.resets++;
            if (player.infinityUpgrades.includes("skipResetGalaxy")) {
                player.resets++;
                if (player.galaxies == 0) player.galaxies = 1
            }
        }

        if (player.replicanti.unl && !player.achievements.includes("r95")) player.replicanti.amount = new Decimal(1)

        player.replicanti.galaxies = (player.timestudy.studies.includes(33)) ? Math.floor(player.replicanti.galaxies/2) :0

        setInitialDimensionPower();


        if (player.currentChallenge == "challenge12" || player.currentChallenge == "postc1" || player.currentChallenge == "postc6") document.getElementById("matter").style.display = "block";
        else document.getElementById("matter").style.display = "none";

        document.getElementById("replicantireset").innerHTML = "Reset replicanti amount, but get a free galaxy<br>"+player.replicanti.galaxies + " replicated galaxies created."

        if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r66")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r83")) player.tickspeed = player.tickspeed.times(Decimal.pow(0.95,player.galaxies));
        if (player.eternities < 30) {
            document.getElementById("secondRow").style.display = "none";
            document.getElementById("thirdRow").style.display = "none";
            document.getElementById("tickSpeed").style.visibility = "hidden";
            document.getElementById("tickSpeedMax").style.visibility = "hidden";
            document.getElementById("tickLabel").style.visibility = "hidden";
            document.getElementById("tickSpeedAmount").style.visibility = "hidden";
            document.getElementById("fourthRow").style.display = "none";
            document.getElementById("fifthRow").style.display = "none";
            document.getElementById("sixthRow").style.display = "none";
            document.getElementById("seventhRow").style.display = "none";
            document.getElementById("eightRow").style.display = "none";
        }
        document.getElementById("matter").style.display = "none";
        document.getElementById("quickReset").style.display = "none";

        checkForEndMe()

        kong.submitStats('Infinitied', getInfinitied());
        kong.submitStats('Fastest Infinity time (ms)', Math.floor(player.bestInfinityTime * 100));
        giveAchievement("To infinity!");
        if (player.infinitied >= 10) giveAchievement("That's a lot of infinites");
        if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");


        updateAutobuyers();
        if (player.challenges.includes("challenge1")) player.money = new Decimal(100)
        if (player.achievements.includes("r37")) player.money = new Decimal(1000);
        if (player.achievements.includes("r54")) player.money = new Decimal(2e5);
        if (player.achievements.includes("r55")) player.money = new Decimal(1e10);
        if (player.achievements.includes("r78")) player.money = new Decimal(1e25);
        if (player.challenges.length >= 2) giveAchievement("Daredevil");
        if (player.challenges.length == 12) giveAchievement("AntiChallenged");
        resetInfDimensions();
        player.tickspeed = player.tickspeed.times(Decimal.pow(getTickSpeedMultiplier(), player.totalTickGained))
        updateTickSpeed();
        if (player.challenges.length == 20) giveAchievement("Anti-antichallenged");
        IPminpeak = new Decimal(0)


        if (player.eternities > 10 && player.currentEternityChall !== "eterc8" && player.currentEternityChall !== "eterc2" && player.currentEternityChall !== "eterc10") {
            for (var i=1;i<player.eternities-9 && i < 9; i++) {
                if (player.infDimBuyers[i-1]) {
                    buyMaxInfDims(i)
                    buyManyInfinityDimension(i)
                }
            }
        }

        if (player.eternities >= 40 && player.replicanti.auto[0] && player.currentEternityChall !== "eterc8") {
            while (player.infinityPoints.gte(player.replicanti.chanceCost) && player.currentEternityChall !== "eterc8" && player.replicanti.chance < 1) upgradeReplicantiChance()
        }

        if (player.eternities >= 60 && player.replicanti.auto[1] && player.currentEternityChall !== "eterc8") {
            while (player.infinityPoints.gte(player.replicanti.intervalCost) && player.currentEternityChall !== "eterc8" && ((player.timestudy.studies.includes(22)) ? player.replicanti.interval > 1 : player.replicanti.interval > 50)) upgradeReplicantiInterval()
        }

        if (player.eternities >= 80 && player.replicanti.auto[2] && player.currentEternityChall !== "eterc8") {
            while (player.infinityPoints.gte(player.replicanti.galCost)) upgradeReplicantiGalaxy()
        }

        Marathon2 = 0;

    }
  updateChallenges();
  updateChallengeTimes()
  updateLastTenRuns()


}


function respecToggle() {
    if (player.respec) {
        player.respec = false
        document.getElementById("respec").className = "storebtn"
    } else {
        player.respec = true
        document.getElementById("respec").className = "timestudybought"
    }
}

function eternity(force, auto) {
    if ((player.infinityPoints.gte(Number.MAX_VALUE) && (!player.options.eternityconfirm || auto || confirm("永恒将重置除成就以及挑战纪录以外的一切。你将获得永恒点数并解锁多种升级。"))) || force === true) {
        if (force) player.currentEternityChall = "";
        if (player.currentEternityChall !== "" && player.infinityPoints.lt(player.eternityChallGoal)) return false
        if (player.thisEternity<player.bestEternity && !force) {
            player.bestEternity = player.thisEternity
            if (player.bestEternity < 300) giveAchievement("That wasn't an eternity");
            if (player.bestEternity <= 0.01) giveAchievement("Less than or equal to 0.001");
        }
        if (player.thisEternity < 2) giveAchievement("Eternities are the new infinity")
        if (player.currentEternityChall == "eterc6" && ECTimesCompleted("eterc6") < 5) player.dimensionMultDecrease = parseFloat((player.dimensionMultDecrease - 0.2).toFixed(1))
        if (player.currentEternityChall == "eterc11" && ECTimesCompleted("eterc11") < 5) player.tickSpeedMultDecrease = parseFloat((player.tickSpeedMultDecrease - 0.07).toFixed(2))
        if (player.infinitied < 10 && !force) giveAchievement("Do you really need a guide for this?");
        if (Decimal.round(player.replicanti.amount) == 9) giveAchievement("We could afford 9");
        if (player.dimlife && !force) giveAchievement("8 nobody got time for that")
        if (player.dead && !force) giveAchievement("You're already dead.")
        if (player.infinitied <= 1 && !force) giveAchievement("Do I really need to infinity")
        if (gainedEternityPoints().gte("1e600") && player.thisEternity <= 600 && player.dilation.active && !force) giveAchievement("Now you're thinking with dilation!")
        temp = []
        player.eternityPoints = player.eternityPoints.plus(gainedEternityPoints())
        addEternityTime(player.thisEternity, gainedEternityPoints())
        if (player.currentEternityChall !== "") {
            if (player.eternityChalls[player.currentEternityChall] === undefined) {
                player.eternityChalls[player.currentEternityChall] = 1
            } else if (player.eternityChalls[player.currentEternityChall] < 5) player.eternityChalls[player.currentEternityChall] += 1
            player.etercreq = 0
            respecTimeStudies()
            if (Object.keys(player.eternityChalls).length >= 10) {
                var eterchallscompletedtotal = 0;
                for (i=1; i<Object.keys(player.eternityChalls).length+1; i++) {
                    eterchallscompletedtotal += player.eternityChalls["eterc"+i]
                }
                if (eterchallscompletedtotal >= 50) {
                    giveAchievement("5 more eternities until the update");
                }
            }
        }
        for (var i=0; i<player.challenges.length; i++) {
            if (!player.challenges[i].includes("post") && player.eternities > 1) temp.push(player.challenges[i])
        }
        if (player.timestudy.studies.includes(191)) player.infinitiedBank += Math.floor(player.infinitied*0.05)
        if (player.achievements.includes("r131")) player.infinitiedBank += Math.floor(player.infinitied*0.05)
        if (player.infinitiedBank > 5000000000) giveAchievement("No ethical consumption");
        if (player.dilation.active && (!force || player.infinityPoints.gte(Number.MAX_VALUE))) {
            let tachyonGain = Math.max(Math.pow(Decimal.log10(player.money) / 400, 1.5) * (Math.pow(3, player.dilation.rebuyables[3])) - player.dilation.totalTachyonParticles, 0)
            player.dilation.totalTachyonParticles = player.dilation.totalTachyonParticles.plus(tachyonGain)
            player.dilation.tachyonParticles = player.dilation.tachyonParticles.plus(tachyonGain)
        }
        player.challenges = temp
        player = {
            money: new Decimal(10),
            tickSpeedCost: new Decimal(1000),
            tickspeed: new Decimal(1000),
            firstCost: new Decimal(10),
            secondCost: new Decimal(100),
            thirdCost: new Decimal(10000),
            fourthCost: new Decimal(1000000),
            fifthCost: new Decimal(1e9),
            sixthCost: new Decimal(1e13),
            seventhCost: new Decimal(1e18),
            eightCost: new Decimal(1e24),
            firstAmount: new Decimal(0),
            secondAmount: new Decimal(0),
            thirdAmount: new Decimal(0),
            fourthAmount: new Decimal(0),
            firstBought: 0,
            secondBought: 0,
            thirdBought: 0,
            fourthBought: 0,
            fifthAmount: new Decimal(0),
            sixthAmount: new Decimal(0),
            seventhAmount: new Decimal(0),
            eightAmount: new Decimal(0),
            fifthBought: 0,
            sixthBought: 0,
            seventhBought: 0,
            eightBought: 0,
            firstPow: new Decimal(1),
            secondPow: new Decimal(1),
            thirdPow: new Decimal(1),
            fourthPow: new Decimal(1),
            fifthPow: new Decimal(1),
            sixthPow: new Decimal(1),
            seventhPow: new Decimal(1),
            eightPow: new Decimal(1),
            sacrificed: new Decimal(0),
            achievements: player.achievements,
            challenges: (player.eternities > 0 && player.achievements.includes("r133")) ? ["challenge1", "challenge2", "challenge3", "challenge4", "challenge5", "challenge6", "challenge7", "challenge8", "challenge9", "challenge10", "challenge11", "challenge12", "postc1", "postc2", "postc3", "postc4", "postc5", "postc6", "postc7", "postc8"] : (player.eternities > 0) ? ["challenge1", "challenge2", "challenge3", "challenge4", "challenge5", "challenge6", "challenge7", "challenge8", "challenge9", "challenge10", "challenge11", "challenge12"] : [],
            currentChallenge: "",
            infinityUpgrades: player.infinityUpgrades,
            infinityPoints: new Decimal(0),
            infinitied: 0,
            infinitiedBank: player.infinitiedBank,
            totalTimePlayed: player.totalTimePlayed,
            bestInfinityTime: 9999999999,
            thisInfinityTime: 0,
            resets: (player.eternities > 2) ? 4 : 0,
            galaxies: (player.eternities > 2) ? 1 : 0,
            tickDecrease: 0.9,
            totalmoney: player.totalmoney,
            interval: null,
            lastUpdate: player.lastUpdate,
            achPow: player.achPow,
            autobuyers: (player.eternities > 0) ? player.autobuyers : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            partInfinityPoint: 0,
            partInfinitied: 0,
            break: player.eternities > 0 ? player.break : false,
            costMultipliers: [new Decimal(1e3), new Decimal(1e4), new Decimal(1e5), new Decimal(1e6), new Decimal(1e8), new Decimal(1e10), new Decimal(1e12), new Decimal(1e15)],
            tickspeedMultiplier: new Decimal(10),
            chall2Pow: 1,
            chall3Pow: new Decimal(0.01),
            newsArray: player.newsArray,
            matter: new Decimal(0),
            chall11Pow: new Decimal(1),
            challengeTimes: player.challengeTimes,
            infchallengeTimes: player.infchallengeTimes,
            lastTenRuns: [[600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)], [600*60*24*31, new Decimal(1)]],
            lastTenEternities: player.lastTenEternities,
            infMult: new Decimal(1),
            infMultCost: new Decimal(10),
            tickSpeedMultDecrease: player.eternities > 18 ? player.tickSpeedMultDecrease : 10,
            tickSpeedMultDecreaseCost: player.eternities > 18 ? player.tickSpeedMultDecreaseCost : 3e6,
            dimensionMultDecrease: player.eternities > 18 ? player.dimensionMultDecrease : 10,
            dimensionMultDecreaseCost: player.eternities > 18 ? player.dimensionMultDecreaseCost : 1e8,
            version: player.version,
            postChallUnlocked: (player.achievements.includes("r133")) ? 8 : 0,
            postC4Tier: 1,
            postC3Reward: new Decimal(1),
            overXGalaxies: player.overXGalaxies,
            spreadingCancer: player.spreadingCancer,
            infDimensionsUnlocked: [false, false, false, false, false, false, false, false],
            infinityPower: new Decimal(1),
            infinityDimension1 : {
                cost: new Decimal(1e8),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension2 : {
                cost: new Decimal(1e9),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension3 : {
                cost: new Decimal(1e10),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension4 : {
                cost: new Decimal(1e20),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension5 : {
                cost: new Decimal(1e140),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension6 : {
                cost: new Decimal(1e200),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension7 : {
                cost: new Decimal(1e250),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infinityDimension8 : {
                cost: new Decimal(1e280),
                amount: new Decimal(0),
                bought: 0,
                power: new Decimal(1),
                baseAmount: 0
            },
            infDimBuyers: player.infDimBuyers,
            timeShards: new Decimal(0),
            tickThreshold: new Decimal(1),
            totalTickGained: 0,
            timeDimension1: player.timeDimension1,
            timeDimension2: player.timeDimension2,
            timeDimension3: player.timeDimension3,
            timeDimension4: player.timeDimension4,
            timeDimension5: player.timeDimension5,
            timeDimension6: player.timeDimension6,
            timeDimension7: player.timeDimension7,
            timeDimension8: player.timeDimension8,
            eternityPoints: player.eternityPoints,
            eternities: player.eternities+1,
            thisEternity: 0,
            bestEternity: player.bestEternity,
            eternityUpgrades: player.eternityUpgrades,
            epmult: player.epmult,
            epmultCost: player.epmultCost,
            totalTickGained: 0,
            offlineProd: player.eternities > 18 ? player.offlineProd : 0,
            offlineProdCost: player.eternities > 18 ? player.offlineProdCost : 1e7,
            challengeTarget: 0,
            autoSacrifice: player.eternities > 5 ? player.autoSacrifice : 1,
            replicanti: {
                amount: player.eternities > 48 ? new Decimal(1) : new Decimal(0),
                unl: player.eternities > 48 ? true : false,
                chance: 0.01,
                chanceCost: new Decimal(1e150),
                interval: 1000,
                intervalCost: new Decimal(1e140),
                gal: 0,
                galaxies: 0,
                galCost: new Decimal(1e170),
                galaxybuyer: (player.eternities > 1) ? player.replicanti.galaxybuyer : undefined,
                auto: player.replicanti.auto
            },
            timestudy: player.timestudy,
            eternityChalls: player.eternityChalls,
            eternityChallGoal: new Decimal(Number.MAX_VALUE),
            currentEternityChall: "",
            eternityChallUnlocked: player.eternityChallUnlocked,
            etercreq: player.etercreq,
            autoIP: new Decimal(0),
            autoTime: 1e300,
            infMultBuyer: player.infMultBuyer,
            autoCrunchMode: player.autoCrunchMode,
            respec: player.respec,
            eternityBuyer: player.eternityBuyer,
            eterc8ids: 50,
            eterc8repl: 40,
            dimlife: true,
            dead: true,
            dilation: {
                studies: player.dilation.studies,
                active: false,
                tachyonParticles: player.dilation.tachyonParticles,
                dilatedTime: player.dilation.dilatedTime,
                totalTachyonParticles: player.dilation.totalTachyonParticles,
                nextThreshold: player.dilation.nextThreshold,
                freeGalaxies: player.dilation.freeGalaxies,
                upgrades: player.dilation.upgrades,
                rebuyables: player.dilation.rebuyables
            },
            why: player.why,
            options: player.options
        };
        if (player.respec) respecTimeStudies()
        player.respec = false
        giveAchievement("Time is relative")
        if (player.eternities >= 100) giveAchievement("This mile took an Eternity");
        if (player.replicanti.unl) player.replicanti.amount = new Decimal(1)
        player.replicanti.galaxies = 0
        document.getElementById("respec").className = "storebtn"
        if (player.achievements.includes("r36")) player.tickspeed = player.tickspeed.times(0.98);
        if (player.achievements.includes("r45")) player.tickspeed = player.tickspeed.times(0.98);

        if (player.eternities <= 30) {
            document.getElementById("secondRow").style.display = "none";
            document.getElementById("thirdRow").style.display = "none";
            document.getElementById("tickSpeed").style.visibility = "hidden";
            document.getElementById("tickSpeedMax").style.visibility = "hidden";
            document.getElementById("tickLabel").style.visibility = "hidden";
            document.getElementById("tickSpeedAmount").style.visibility = "hidden";
            document.getElementById("fourthRow").style.display = "none";
            document.getElementById("fifthRow").style.display = "none";
            document.getElementById("sixthRow").style.display = "none";
            document.getElementById("seventhRow").style.display = "none";
            document.getElementById("eightRow").style.display = "none";
        }
        document.getElementById("matter").style.display = "none";
        document.getElementById("quickReset").style.display = "none";
        if (player.infinitied >= 1 && !player.challenges.includes("challenge1")) player.challenges.push("challenge1");
        var autobuyers = document.getElementsByClassName('autoBuyerDiv')
        if (player.eternities < 2) {
            for (var i=0; i<autobuyers.length;i++) autobuyers.item(i).style.display = "none"
            document.getElementById("buyerBtnDimBoost").style.display = "i
