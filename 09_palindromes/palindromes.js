const palindromes = function (string) {
    console.log("STRING: " + string); 
    for (let i = 0; i < string.length; i++) {
        // console.log("Beginning of string: " + string[i] + " \n" + 
        //             "End of string: " + string[string.length - 1 - i]); 

        if (string[i] != string[string.length - i - 1]) {
            return false; 
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
