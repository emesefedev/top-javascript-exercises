const removeFromArray = function(array) {

    for (let i = 1; i < arguments.length; i++) {
        const elementToRemove = arguments[i]
        while(array.includes(elementToRemove)) {
            const elementIdx = array.indexOf(elementToRemove)
            array.splice(elementIdx, 1)

        }
        
    }

    return array
}

// Do not edit below this line
module.exports = removeFromArray;
