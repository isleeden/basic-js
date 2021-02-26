const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];

  arr.forEach((item, index, array) => {
    if (
      (array[index - 1] === "--discard-next" &&
        array[index + 1] === "--double-prev") ||
      (item === "--double-prev" && array[index - 2] === "--discard-next")
    ) {
      return;
    }
    if (item === "--discard-next" || array[index - 1] === "--discard-next") {
      return;
    } else if (item === "--discard-prev") {
      if (array[index - 1]) {
        result.splice(index - 1, 1);
      }
    } else if (item === "--double-next") {
      if (array[index + 1]) {
        result.push(array[index + 1]);
      }
    } else if (item === "--double-prev") {
      if (array[index - 1]) {
        result.push(array[index - 1]);
      }
    } else {
      result.push(item);
    }
  });

  return result;
};
