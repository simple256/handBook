const express = require('express');
const mongoose = require('mongoose');

// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

require('dotenv/config');

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => {
  // eslint-disable-next-line no-console
  console.log('connected to MongoDB');
});

const Product = mongoose.model('Product', {
  id: Number,
  name: String,
  price: mongoose.Schema.Types.Decimal128,
});

app.get('/products', (req, res) => Product.find()
  .exec()
  .then((products) => res.json(products)));

app.post('/products', (req, res) => Product.create(req.body)
  .then((createdProduct) => res.json(createdProduct)));

app.put('/products/:id', (req, res) => Product.findOneAndUpdate({ id: req.params.id }, req.body)
  .exec()
  .then((product) => res.json(product)));

app.delete('/products/:id', (req, res) => Product.deleteOne({ id: req.params.id })
  .exec()
  .then(() => res.json({ success: true })));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Lister on 3000');
});
