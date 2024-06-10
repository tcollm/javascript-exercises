const reverseString = function(string) {
    let reverseString = string[string.length - 1];

    for (let i = 2; i < string.length + 1; i++) {
        reverseString += string[string.length - i];
    }
    return reverseString; 
};

// Do not edit below this line
module.exports = reverseString;
