const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        res.send(`Payment methods for cart ${id}`);
    }
    else {
        res.status(404).send('')
    }
});

app.get('/available_payments', (req, res) => {
    obj = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    }
    res.send(obj)
});

app.post('/login', (req, res) => {
    username = JSON.stringify(req.body)
    user = JSON.parse(username).userName
    res.send(`Welcome ${user}`)
    
});
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app