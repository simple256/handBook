// eslint-disable-next-line import/no-extraneous-dependencies
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
};
