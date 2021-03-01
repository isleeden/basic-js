const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    if (flag === undefined) {
      this.flag = true;
    } else {
      this.flag = flag;
    }
  }

  encrypt(mess, key) {
    const alphabet = [
        {},
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      result = [];

    mess = mess.toLowerCase();
    key = key.toLowerCase();

    for (let i = 0, j = 0; i < mess.length; i++) {
      const index =
        (alphabet.indexOf(mess[i]) +
          alphabet.indexOf(key[j % key.length]) -
          1) %
        26;
      if (alphabet.indexOf(mess[i]) === -1) {
        result.push(mess[i]);
      } else if (index === 0) {
        result.push(alphabet[26]);
        j++;
      } else {
        result.push(alphabet[index]);
        j++;
      }
    }

    if (!this.flag) {
      result.reverse();
    }

    return result.join("").toUpperCase();
  }
  decrypt(mess, key) {
    const alphabet = [
        {},
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      result = [];

    mess = mess.toLowerCase();
    key = key.toLowerCase();

    for (let i = 0, j = 0; i < mess.length; i++) {
      if (alphabet.indexOf(mess[i]) != -1) {
        let index =
          alphabet.indexOf(mess[i]) - alphabet.indexOf(key[j % key.length]) + 1;
        if (index <= 0) {
          result.push(alphabet[26 + index]);
        } else {
          result.push(alphabet[index]);
        }
        j++;
      } else {
        result.push(mess[i]);
      }
    }

    if (!this.flag) {
      result.reverse();
    }
    return result.join("").toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
