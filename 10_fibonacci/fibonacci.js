// fibonacci sequence = 1,1,2,3,5,8,13,...
const fibonacci = function(nthTerm) {
    let currentTerm = 1;
    let lastTerm = 0; 
    let tempStorage = 0; 

    for (let i = 0; i < nthTerm - 1; i++) {
        // console.log("Equation: " + currentTerm + " + " + lastTerm + " = " + (currentTerm+lastTerm));
        tempStorage = currentTerm; 
        currentTerm += lastTerm;
        lastTerm = tempStorage; 
    }

    return currentTerm; 
};

// Do not edit below this line
module.exports = fibonacci;
