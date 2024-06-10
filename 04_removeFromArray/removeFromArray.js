const removeFromArray = function(array, removeValue) {
    let index = array.indexOf(removeValue);
    array.splice(index, 1);

    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
