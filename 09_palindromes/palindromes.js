const palindromes = function (string) {
    let filteredString = [...string].filter(char => /[^\W_]/.test(char)).join(''); 
    filteredString = filteredString.toLowerCase(); 


    for (let i = 0; i < filteredString.length; i++) {
        if (filteredString[i] != filteredString[filteredString.length - i - 1]) {
            return false; 
        }
    }
    return true; 
};

// Do not edit below this line
module.exports = palindromes;
