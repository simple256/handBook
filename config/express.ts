const bodyParser = require('body-parser');

export = (app) => {
  app.use(bodyParser.json());
};
