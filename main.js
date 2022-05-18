class Block {
  /**
   * @param {*} index this tells us where the block is located in our blockchain.
   * @param {*} timestamp this tells us when the block was created.
   * @param {*} data any type of data that you want to associate with this Block.
   * @param {*} previousHash this is a @string that contains the hash of the previous block before this one.
   */

  constructor(index, timestamp, data, previousHash = "") {
    //to keep track of the values in the parameter...
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = ""; // this contains the hash of the current block and there must be a way to CALCULATE it
  }

  // in this project we are using SHA256 as hashing function using an imported library (cryptoJS)
  // npm install --save crypto-js

  calculateHash() {}
}
