const express = require('express');
const mongoose = require('mongoose');
require('./app/models/products');
const config = require('./config/index');
require('dotenv/config');

const app = express();
config.express(app);
config.routes(app);

const { appPort } = config.app;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  () => {
  // eslint-disable-next-line no-console
    console.log('connected to MongoDB');
  },
).then(() => app.listen(
  appPort,
  () => {
  // eslint-disable-next-line no-console
    console.log('Lister on 3000');
  },
  // eslint-disable-next-line no-console
)).catch(() => console.log('Connection failed'));
