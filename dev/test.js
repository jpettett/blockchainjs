const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2380, 'ooddio908098', 'ugi839839220');

// bitcoin.createNewTransaction(100, 'ALEX89DJSBJHBK', 'JEN3902874HUODHIU');

// bitcoin.createNewBlock(295080, '0908UJOUWHI', 'UDIH89U');

// bitcoin.createNewTransaction(50, 'ALEX89DJSBJHBK', 'JEN3902874HUODHIU');
// bitcoin.createNewTransaction(300, 'ALEX89DJSBJHBK', 'JEN3902874HUODHIU');
// bitcoin.createNewTransaction(2000, 'ALEX89DJSBJHBK', 'JEN3902874HUODHIU');

// bitcoin.createNewBlock(2444455080, '0908UJOUWHI', 'UDIH89U');

const previousBlockHash = 'OI91038038309802982039UEOIHOSUDH98';
const currentBlockData = [
    {
    amount: 10,
    sender: 'NDI09809809033J',
    recipient: '0909I9U9OIUHSUISHSIU'
}
];

const nonce = 100;


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));