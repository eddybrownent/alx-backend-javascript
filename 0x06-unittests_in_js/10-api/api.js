const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.status(200).send(`Payment methods for cart ${req.params.id}`);
});

app.get('/cart/:id(*)', (req, res) => {
  res.status(404).send(`Cannot accept ${req.params.id} not a number`);
});


app.get('/available_payments', (req, res) => {
  res.status(200).json(
	  {
		  payment_methods: {
			  credit_cards: true,
			  paypal: false
		  }
	  });
});

app.post('/login', (req, res) => {
 const { userName } = req.body;
 res.status(200).send(`Welcome ${userName}`)
});

module.exports = app;
