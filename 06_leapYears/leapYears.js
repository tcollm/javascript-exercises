// Years by 4 are leap years, unless they are divisible by 100, if so, then they 
// must also be divisible by 400 to be considered a leap year. 
const leapYears = function(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true; 
        } else {
            return false;  
        }
    } else if (year % 4 === 0) {
        return true; 
    }

    return false; 
};

// Do not edit below this line
module.exports = leapYears;
