const removeFromArray = function (arr, ...args) {
  let newArray = arr.filter((currentNumber) => !args.includes(currentNumber));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
