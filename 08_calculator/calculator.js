const add = function(num1, num2) {
	return num1 + num2; 
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(...args) {
  let sum = 0; 
  let intArgs = []; 

  if (Array.isArray(args[0])) {
    args = args[0]; 
  }

  args.forEach((element) => {
    intArgs.push(Number(element));
  });

	for (let i = 0; i < intArgs.length; i++) {
    sum += intArgs[i];
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
