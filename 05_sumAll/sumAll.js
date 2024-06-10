const sumAll = function(num1, num2) {
    let min = 0;
    let max = 0; 
    if (num2 > num1) {
        max = num2; 
        min = num1; 
    } else {
        max = num1;
        min = num2; 
    }

    let sum = min;
    for (let i = min + 1; i < max + 1; i++) {
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
