// code your solution here
function saturdayFun(activity="roller-skate") {
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
}

saturdayFun();
function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`;
    } else {
        return 'This Monday, I will go to the office.';
    }
}

let wrapAdjective = function(sign = "*") {
    return function(shelby = "special") {
        return `You are ${sign}${shelby}${sign}!`;
    }
}