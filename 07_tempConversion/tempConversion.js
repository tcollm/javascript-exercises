// Formula for F to C: (x - 32) * 5/9
const convertToCelsius = function(temp) {
  let convertedTemp = ((temp - 32) * 5/9);
  
  return Math.round((convertedTemp + Number.EPSILON) * 100) / 100;  
};

// Forumla for C to FL x * 5/9 + 32
const convertToFahrenheit = function(temp) {
  let convertedTemp = temp * 5/9 + 32; 

  return Math.round((convertedTemp + Number.EPSILON) * 100) / 100;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
