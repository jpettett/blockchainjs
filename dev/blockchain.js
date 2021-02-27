const sha256 = require('sha256')

//constructor function Blockchain
function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];
}

//methods to create new block

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
//add new transactions to array and push to block
    this.pendingTransactions = [];
    this.chain.push(newBlock);
//return block
    return newBlock;
}


Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
    };

    this.pendingTransactions.push(newTransaction);
    
    return this.getLastBlock()['index'] + 1;

}

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}

module.exports = Blockchain