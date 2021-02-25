const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let number = 0;
  array.forEach((arr) => {
    arr.forEach((item) => {
      if (item === "^^") {
        number += 1;
      }
    });
  });

  return number;
};
