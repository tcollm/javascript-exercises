const findTheOldest = function(array) {
    let ageArray = []; 
    ageArray = array.map((person) => person.yearOfDeath - person.yearOfBirth);

    let oldest = 0; 
    let index = Infinity; 
    for (let i = 0; i < ageArray.length; i++) {
        if (ageArray[i] > oldest) {
            oldest = ageArray[i]; 
            index = i; 
        }
    }

    return array[index].name; 
};

// Do not edit below this line
module.exports = findTheOldest;
