const removeFromArray = function(arr, ...remove) {
    return arr.filter(e => !remove.includes(e))
}

// Do not edit below this line
module.exports = removeFromArray;
