const actions = require('../app/controllers/actions');
const stages = require('../app/controllers/stages');
const operations = require('../app/controllers/operations');
const objects = require('../app/controllers/objects');
const actors = require('../app/controllers/actors');
const projects = require('../app/controllers/projects');

module.exports = (app) => {
  // actions
  app.get('/actions', actions.getAll);
  app.get('/action/:id', actions.get);
  app.post('/actions', actions.create);
  app.put('/action/:id', actions.update);
  app.delete('/action/:id', actions.remove);

  // stages
  app.get('/stages', stages.getAll);
  app.get('/stage/:id', stages.get);
  app.post('/stages', stages.create);
  app.put('/stage/:id', stages.update);
  app.delete('/stage/:id', stages.remove);

  // operations
  app.get('/operations', operations.getAll);
  app.get('/operation/:id', operations.get);
  app.post('/operations', operations.create);
  app.put('/operation/:id', operations.update);
  app.delete('/operation/:id', operations.remove);

  // objects
  app.get('/objects', objects.getAll);
  app.get('/object/:id', objects.get);
  app.post('/objects', objects.create);
  app.put('/object/:id', objects.update);
  app.delete('/object/:id', objects.remove);

  // actors
  app.get('/actors', actors.getAll);
  app.get('/actor/:id', actors.get);
  app.post('/actors', actors.create);
  app.put('/actor/:id', actors.update);
  app.delete('/actor/:id', actors.remove);

  // projects
  app.get('/projects', projects.getAll);
  app.get('/project/:id', projects.get);
  app.post('/projects', projects.create);
  app.put('/project/:id', projects.update);
  app.delete('/project/:id', projects.remove);
};
