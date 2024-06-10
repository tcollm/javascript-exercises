const palindromes = function (string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[length - i]) {
            return false; 
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
