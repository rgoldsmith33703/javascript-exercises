const sumAll = function(num1, num2) {
    finalSum = 0;

    if (!isPositiveNumber(num1) || !isPositiveNumber(num2)) {
        return 'ERROR'
    } else if (num1 > num2) {
        [num1, num2] = [num2, num1]
    } 
    
    for (i=num1; i<=num2; i++) {
            finalSum += i
        }
    
    return finalSum
};

function isPositiveNumber(num) {
    if ((num > 0) && (Number.isInteger(num))) {
        return true
    }
}

// Do not edit below this line
module.exports = sumAll;
