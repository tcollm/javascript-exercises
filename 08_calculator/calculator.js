const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function() {
  let sum = 0; 
	for (let i = 0; i < arguments.length; i++) {
    sum += Number(arguments[i]);
  }
  return sum; 
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
