const app = require('./app');
require('../app/models/index');
const routes = require('./routes');
const express = require('./express');

module.exports = {
  app,
  routes,
  express,
};
