const fibonacci = function(item) {
    item = +item
    if (item < 0) return "OOPS"
    if (item === 0) return 0
    if (item === 1 || item === 2) return 1
    return fibonacci(item - 1) + fibonacci(item - 2)
}

// Do not edit below this line
module.exports = fibonacci;
