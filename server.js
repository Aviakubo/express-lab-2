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

const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    res.send(`<h1>${req.params.question}</h1> ${randomAnswer}`);
});

function randomAnswer(magicResponses) {
    return magicResponses[Math.floor(Math.random() * magicResponses.length)];
};

app.listen(3000);