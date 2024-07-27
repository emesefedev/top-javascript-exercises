const palindromes = function (str) {
    const strLower = str.toLowerCase()
    const strSplit = strLower.split('')
    const original = strSplit.filter((char) => char.match(/^[a-z0-9]+$/i))
    const reversed = original.concat()
    reversed.reverse()

    let isPalindrome = true
    for (i = 0; i < original.length; i++) {
        console.log(`Comparing ${original[i]} with ${reversed[i]}`)
        console.log(`${original[i] !== reversed[i]}\n`)
        if (original[i] !== reversed[i]) {
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}

// Do not edit below this line
module.exports = palindromes;
