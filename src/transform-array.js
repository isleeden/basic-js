const CustomError = require("../extensions/custom-error");

module.exports = function transform(argArr) {
  const arr = argArr.slice(),
    result = [];

  arr.forEach((item, index, array) => {
    if (
      array[index + 1] === "--discard-prev" ||
      item === "--discard-next" ||
      item === "--discard-prev"
    ) {
      return;
    } else if (array[index - 1] === "--discard-next") {
      array[index] = undefined;
    } else if (item === "--double-next") {
      if (array[index + 1] != undefined) {
        result.push(array[index + 1]);
      }
    } else if (item === "--double-prev") {
      if (array[index - 1] != undefined) {
        result.push(array[index - 1]);
      }
    } else {
      result.push(item);
    }
  });

  return result;
};
