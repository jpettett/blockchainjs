const Blockchain = require('./blockchain')

const bitcoin = new Blockchain();


const previousBlockHash = '8JDHDIUEHEWIOUPWUO8493898080U0';
const currentBlockData = [
    {
    amount: 10,
    sender: '888809809809033J',
    recipient: '0909I9U9OIUHSUISHSIU'
},
{
    amount: 30,
    sender: 'NDIkdjdjdihwi09809809033J',
    recipient: '0909I9U9OIUHSUISHSIU'
},
{
    amount: 190,
    sender: '90djjilwiwDI09809809033J',
    recipient: '0909I9U9OIUHSUISHSIU'
}
];

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 106546))