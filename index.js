// code your solution here

//defines saturdayFun function declaration as specified

function saturdayFun(activity = 'roller-skate') {

    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
//defines mondayWork function expression as specified

const mondayWork = function (action = 'go to the office') {

    return `This Monday, I will ${action}.`;

}
mondayWork();
// defines wrapAdjective function according to the specification

function wrapAdjective(value) {
    return function (param = "special") {
        return `You are ${value}${param}${value}!`;
    }
    //return `You are ${value}`;
}
wrapAdjective("*")("a hard worker");
wrapAdjective('||')("a dedicated programmer");


