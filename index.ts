import * as express from 'express';
import * as mongoose from 'mongoose';
const config = require('./config/index');
require('dotenv/config');

const app = express();
config.express(app);
config.routes(app);

mongoose
  .connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connected to MongoDB');
  })
  .then(() =>
    app.listen(process.env.APP_PORT, () => {
      console.log(`Listening on ${process.env.APP_PORT}...`);
    }),
  )
  .catch(() => console.log('Connection failed'));
