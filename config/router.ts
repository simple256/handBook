import {
  actionsController,
  actorsController,
  authController,
  objectsController,
  projectCategoriesController,
  projectsController,
  stagesController,
  userController,
} from '../app/controllers';
import { attachCurrentUser, checkToken, isAuth } from '../app/middleware';

export = (app) => {
  /**
   * Actions requests
   */
  app.get('/api/actions', checkToken, isAuth, attachCurrentUser, actionsController.getAll);
  app.post('/api/actions', checkToken, isAuth, attachCurrentUser, actionsController.create);
  app.put('/api/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.update);
  app.delete('/api/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.remove);

  /**
   * Actors requests
   */
  app.get('/api/actors', checkToken, isAuth, attachCurrentUser, actorsController.getAll);
  app.post('/api/actors', checkToken, isAuth, attachCurrentUser, actorsController.create);
  app.put('/api/actor/:id', checkToken, isAuth, attachCurrentUser, actorsController.update);
  app.delete('/api/actor/:id', checkToken, isAuth, attachCurrentUser, actorsController.remove);

  /**
   * Auth requests
   */
  app.post('/api/signin', authController.signIn);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }
  app.post('/api/register', authController.register);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }

  /**
   * Objects requests
   */
  app.get('/api/objects', checkToken, isAuth, attachCurrentUser, objectsController.getAll);
  app.post('/api/objects', checkToken, isAuth, attachCurrentUser, objectsController.create);
  app.put('/api/object/:id', checkToken, isAuth, attachCurrentUser, objectsController.update);
  app.delete('/api/object/:id', checkToken, isAuth, attachCurrentUser, objectsController.remove);

  /**
   * Projects requests
   */
  app.get('/api/projects', checkToken, isAuth, attachCurrentUser, projectsController.getAll);
  app.post('/api/projects', checkToken, isAuth, attachCurrentUser, projectsController.create);
  app.put('/api/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.update);
  app.delete('/api/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.remove);

  /**
   * Stages requests
   */
  // app.get('/api/stages', stagesController.getAll);
  app.get('/api/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.get);
  app.post('/api/stages', checkToken, isAuth, attachCurrentUser, stagesController.create);
  app.put('/api/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.update);
  app.delete('/api/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.remove);

  /**
   * User request
   */
  app.put('/api/user/:id', checkToken, isAuth, attachCurrentUser, userController.update);

  /**
   * projectCategories request
   */
  app.get('/api/projectCategories', projectCategoriesController.getFirstLevel);
  app.post('/api/projectCategories', projectCategoriesController.create);
};
