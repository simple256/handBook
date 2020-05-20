import * as express from 'express';
import * as mongoose from 'mongoose';
import { express as expressCfg, router } from './config';
require('dotenv/config');

const app = express();
expressCfg(app);
router(app);

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
