// Examples

// Express application creation
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Step 1: Write a function that adds two numbers
app.get('/api/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

// Step 2: Write a function that multiplies two numbers
app.get('/api/multiply/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const multiply = num1 * num2;
    res.send(`The multiplication of ${num1} and ${num2} is ${multiply}`);
});

// Step 3: Write a function that divides two numbers
// infinente gelirse onu da kullanıcıya bu işlemin yapılamayacağını söyleyelim.
app.get('/api/divide/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    
    if (num1 == 0 && num2 == 0) {
        res.send('Undefined');
    } else if (num2 == 0) {
        res.send('The division cannot be done');
    } else {
        const divide = num1 / num2;
        res.send(`The division of ${num1} and ${num2} is ${divide}`);
    }
});

// Step 4: Write a function that subtracts two numbers
// eğer ilk sayı ikinci sayıdan küçükse, kullacıyı bu işlemin yapılamayacağını söylelim.
app.get('/api/subtract/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if (num1 < num2) {
        res.send('The subtraction cannot be done');
    } else {
        const subtract = num1 - num2;
        res.send(`The subtraction of ${num1} and ${num2} is ${subtract}`);
    }
});

// server running on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});