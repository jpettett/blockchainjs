//constructor function Blockchain
function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

//methods to create new block

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
//add new transactions to array and push to block
    this.newTransactions = [];
    this.chain.push(newBlock);
//return block
    return newBlock;
}


Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

module.exports = Blockchain