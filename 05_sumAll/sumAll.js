const sumAll = function(start, end) {
    let sum = 0

    const areIntegers = Number.isInteger(start) && Number.isInteger(end)
    const arePositive = start > 0 && end > 0

    if (!areIntegers || !arePositive) return "ERROR"

    if (start > end)
    {
        const aux = start
        start = end
        end = aux
    }


    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum
}

// Do not edit below this line
module.exports = sumAll;
