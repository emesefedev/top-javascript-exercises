const reverseString = function(originalStr) {
    let reversedStr = ""
    for (let i = originalStr.length - 1; i >= 0; i--) {
        reversedStr += originalStr[i]
    }

    return reversedStr
};

// Do not edit below this line
module.exports = reverseString;
