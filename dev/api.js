const bodyParser = require('body-parser');
var express =require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/blockchain', function (req, res) {
    res.send('Hello World')
});

app.post('/transaction', function(req, res) {
    console.log(req.body);
    res.send(`The amount of the transaction is ${req.body.amount} bitcoin`);
});

app.get('/mine', function(req, res){

});



app.listen(3000, function() {
    console.log('Listening on Port 3000...')
});