const removeFromArray = function(array) {
    for(let i = 1; i < arguments.length; i++) {
        let removeValue = arguments[i];
        let index = array.indexOf(removeValue);
        array.splice(index, 1);
    }

    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
