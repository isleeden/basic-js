const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )");
    } else {
      this.chain.push("( " + value + " )");
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw "THROWN";
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain;
    this.chain = [];
    return chain.join("~~");
  },
};

module.exports = chainMaker;
