const sumAll = function(min, max) {
    let sum = min;
    for (let i = min + 1; i < max + 1; i++) {
        sum += i; 
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
