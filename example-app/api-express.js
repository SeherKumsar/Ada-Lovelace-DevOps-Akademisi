const express = require('express');

const app = express();

// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

// parametreli route
app.get('/api/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`);
});

app.get('/api/number/:number', (req, res) => {
    const number = req.params.number;
    res.send(`Your number is ${number}`);
});

// sum numbers
app.get('/api/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});

