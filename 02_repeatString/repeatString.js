const repeatString = function(stringToRepeat, totalRepetitions) {
    if (totalRepetitions >= 0) {
        return stringToRepeat.repeat(totalRepetitions)
    } 
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
