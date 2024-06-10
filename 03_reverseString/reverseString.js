const reverseString = function(string) {
    let reverseString = null;

    for (let i = 0; i < string.length; i++) {
        reverseString += string[string.length - i];
    }
    return reverseString; 
};

// Do not edit below this line
module.exports = reverseString;
