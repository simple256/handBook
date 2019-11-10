const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv/config');

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => {
  // eslint-disable-next-line no-console
  console.log('connected to MongoDB');
});

const products = [
  {
    id: 1,
    name: 'phone',
    price: 123,
  },
];

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  products.push(req.body);
  res.json(req.body);
});
app.put('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === +req.params.id);
  const productIndex = products.indexOf(product);
  const newProduct = { ...product, ...req.body };
  products[productIndex] = newProduct;
  res.json(newProduct);
});
app.delete('/products/:id', (req, res) => {
  const product = products.find((p) => p.id === +req.params.id);
  const productIndex = products.indexOf(product);
  products.splice(productIndex, 1);
  res.json(products);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Lister on 3000');
});
