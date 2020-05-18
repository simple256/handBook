import {
  actionsController,
  actorsController,
  authController,
  objectsController,
  operationsController,
  projectsController,
  stagesController,
} from '../app/controllers';
// const authMiddleware = require('../app/middleware/auth');

export = (app) => {
  /**
   * Actions requests
   */
  app.get('/actions', actionsController.getAll);
  app.post('/actions', actionsController.create);
  app.put('/action/:id', actionsController.update);
  app.delete('/action/:id', actionsController.remove);

  /**
   * Actors requests
   */
  app.get('/actors', actorsController.getAll);
  app.post('/actors', actorsController.create);
  app.put('/actor/:id', actorsController.update);
  app.delete('/actor/:id', actorsController.remove);

  /**
   * Auth requests
   */
  app.post('/signin', authController.signIn);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }
  app.put('/register', authController.register);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123",
  //   "confirmationPassword": "123123123123123123"
  // }

  /**
   * Stages requests
   */
  app.get('/stages', stagesController.getAll);
  app.post('/stages', stagesController.create);
  app.put('/stage/:id', stagesController.update);
  app.delete('/stage/:id', stagesController.remove);

  /**
   * Objects requests
   */
  app.get('/objects', objectsController.getAll);
  app.post('/objects', objectsController.create);
  app.put('/object/:id', objectsController.update);
  app.delete('/object/:id', objectsController.remove);

  /**
   * Operations requests
   */
  app.get('/operations', operationsController.getAll);
  app.post('/operations', operationsController.create);
  app.put('/operation/:id', operationsController.update);
  app.delete('/operation/:id', operationsController.remove);

  /**
   * Projects requests
   */
  app.get('/projects', projectsController.getAll);
  app.post('/projects', projectsController.create);
  app.put('/project/:id', projectsController.update);
  app.delete('/project/:id', projectsController.remove);

  /**
   * Stages requests
   */
  app.get('/stages', stagesController.getAll);
  app.post('/stages', stagesController.create);
  app.put('/stage/:id', stagesController.update);
  app.delete('/stage/:id', stagesController.remove);
};
