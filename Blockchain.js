const Block = require("./Block");

class Blockchain {
  constructor() {
    /** the chain will hold an Array of
     **  @see {Block.js} class
     **/
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, new Date().toDateString(), "Sample Genesis Block", "0");
  }

  // this function returns the latest block from the blockchain
  // technically, it is the block or item at the last index of the array
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // this adds a new Block to the chain
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    newBlock.timestamp = new Date().toDateString();
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
