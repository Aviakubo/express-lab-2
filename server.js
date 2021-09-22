const express = require('express');
console.log(express);

const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send('Hello, ' + req.params.name);
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    var totalBill = parseInt(req.params.total);
    var tipPercent = parseInt(req.params.tipPercentage);
    var tipAmount = (tipPercent / totalBill) * 100;
    res.send('Your tip is $' + tipAmount)
});



app.listen(3000);