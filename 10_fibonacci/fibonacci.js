// fibonacci sequence = 1,1,2,3,5,8,13,...
const fibonacci = function(nthTerm) {
    let lastTerm = 0; 
    let currentTerm = 1; 
    let fibonacciVal = 0; 

    for (let i = 0; i < nthTerm; i++) {
        currentTerm += lastTerm;
        lastTerm = currentTerm; 
        fibonacciVal += currentTerm; 
    }
    return fibonacciVal; 
};

// Do not edit below this line
module.exports = fibonacci;
