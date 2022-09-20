
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog!");

const mondayWork = function(activity1 = "go to the office") {
    return `This Monday, I will ${activity1}.`;
}

// function mondayWork(activity1 = "go to the office") {
//     return `This Monday, I will ${activity1}.`;

// }

function wrapAdjective(flair = "*") {
    let inner = function(par = "special") {
        return `You are ${flair}${par}${flair}!`;
    } 
    return inner;
    
} wrapAdjective("%")("a dedicated programmer");
//"You are %a dedicated programmer%!"