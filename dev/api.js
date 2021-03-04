const Blockchain = require('./blockchain');
const bodyParser = require('body-parser');

const bitcoin = new Blockchain();

var express =require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
  const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
  res.json({ note: `Transaction will be added in block ${blockIndex}.`})
});

app.get('/mine', function(req, res){

});



app.listen(3000, function() {
    console.log('Listening on Port 3000...')
});