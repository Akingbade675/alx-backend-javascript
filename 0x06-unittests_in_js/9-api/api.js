const app = require('express')();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    res.status(404).send('Error: id must be a number');
  }

  res.send(`Payment methods for cart ${id}`);
});

app.listen('7865', () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
