// fibonacci sequence = 1,1,2,3,5,8,13,...
const fibonacci = function(nthTerm) {
    nthTerm = Number(nthTerm); 

    if (nthTerm === 0) {
        return 0; 
    }

    if (nthTerm < 0) {
        return "OOPS";
    }

    let currentTerm = 1;
    let lastTerm = 0; 
    let tempStorage = 0; 

    for (let i = 0; i < nthTerm - 1; i++) {
        tempStorage = currentTerm; 
        currentTerm += lastTerm;
        lastTerm = tempStorage; 
    }

    return currentTerm; 
};

// Do not edit below this line
module.exports = fibonacci;
