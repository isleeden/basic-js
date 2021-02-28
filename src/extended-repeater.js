const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }
) {
  if (addition === null) {
    addition = "null";
  }

  if (str === null) {
    str = "null";
  }

  separator = separator || "+";
  additionSeparator = additionSeparator || "|";

  const result = [];
  let additionTemplate = [addition];

  for (let i = 1; i < additionRepeatTimes; i++) {
    additionTemplate.push(addition);
  }

  if (additionSeparator) {
    additionTemplate = additionTemplate.join(additionSeparator);
  } else {
  }

  result.push(str + additionTemplate);

  for (let i = 1; i < repeatTimes; i++) {
    result.push(str + additionTemplate);
  }

  return result.join(separator);
};
