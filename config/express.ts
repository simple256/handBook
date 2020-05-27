import * as bodyParser from 'body-parser';

export = (app) => {
  app.use(bodyParser.json());
};

