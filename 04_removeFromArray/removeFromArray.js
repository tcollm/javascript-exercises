const removeFromArray = function(array, removeValue) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === removeValue) {
            count++; 
        }
    }

    if (count === 0) {
        return array; 
    }

    let fixedArray = []; 
    for (let i = 0; i < count; i++) {
        let lenFixedArray = 0; 
        if (array[i] != removeValue) {
            fixedArray[lenFixedArray] += array[i]; 
            lenFixedArray++;
        }
    }

    return fixedArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
