const Block = require("./Block");
const Blockchain = require("./Blockchain");

let ABCoin = new Blockchain();
ABCoin.addBlock(new Block(1, new Date().toDateString(), { amount: 4 }));
ABCoin.addBlock(new Block(2, new Date().toDateString(), { amount: 5 }));

console.log(JSON.stringify(ABCoin, null, 4));

console.log("is Blockchain Valid?", ABCoin.isChainValid());
