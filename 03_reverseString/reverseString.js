const reverseString = function(string) {
    if (string.length === 0) {
        return "";
    }

    let reverseString = string[string.length - 1];

    for (let i = 2; i < string.length + 1; i++) {
        reverseString += string[string.length - i];
    }
    return reverseString; 
};

// Do not edit below this line
module.exports = reverseString;
