const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  }
  placeholder = "";
  while (num > 0) {
    placeholder += string;
    num--;
  }
  return placeholder;
};

// Do not edit below this line
module.exports = repeatString;
