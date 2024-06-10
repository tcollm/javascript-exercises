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

const multiply = function(...args) {
  if (Array.isArray(args[0])) {
    args = args[0];
  }

  let product = args[0]; 
  for (let i = 1; i < args.length; i++) {
    product *= args[i];
  }
  return product; 
};

const power = function(num1, num2) {
  return num1 ** num2; 
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
