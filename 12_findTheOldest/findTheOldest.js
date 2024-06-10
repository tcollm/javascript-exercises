const findTheOldest = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (!(array[i].yearOfDeath)) {
            array[i].yearOfDeath = 2024;
        } 
        if (!(array[i].yearOfBirth)) {
            array[i].yearOfBirth = 2024; 
        }
    }

    let ageArray = []; 
    ageArray = array.map((person) => person.yearOfDeath - person.yearOfBirth);

    let oldest = 0; 
    let index = 0; 
    for (let i = 0; i < ageArray.length; i++) {
        if (ageArray[i] > oldest) {
            oldest = ageArray[i]; 
            index = i; 
        }
    }

    return array[index]; 
};

// Do not edit below this line
module.exports = findTheOldest;
