const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    if (members.length === 0) {
      return "FAIL";
    }
    let result = members.reduce((acc, cur, index) => {
      if (index === 1) {
        if (typeof acc === "string" && typeof cur === "string") {
          return acc.trim()[0] + cur.trim()[0];
        } else if (typeof acc === "string") {
          return acc.trim()[0];
        } else if (typeof cur === "string") {
          return cur.trim()[0];
        } else {
          return "";
        }
      } else {
        if (typeof cur === "string") {
          return acc + cur.trim()[0];
        } else return acc;
      }
    });
    if (result) {
      return result.toUpperCase().split("").sort().join("");
    }
  } else {
    return false;
  }
};
