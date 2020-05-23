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
  app.get('/actions', checkToken, isAuth, attachCurrentUser, actionsController.getAll);
  app.post('/actions', checkToken, isAuth, attachCurrentUser, actionsController.create);
  app.put('/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.update);
  app.delete('/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.remove);

  /**
   * Actors requests
   */
  app.get('/actors', checkToken, isAuth, attachCurrentUser, actorsController.getAll);
  app.post('/actors', checkToken, isAuth, attachCurrentUser, actorsController.create);
  app.put('/actor/:id', checkToken, isAuth, attachCurrentUser, actorsController.update);
  app.delete('/actor/:id', checkToken, isAuth, attachCurrentUser, actorsController.remove);

  /**
   * Auth requests
   */
  app.post('/signin', authController.signIn);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }
  app.post('/register', authController.register);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }

  /**
   * Objects requests
   */
  app.get('/objects', checkToken, isAuth, attachCurrentUser, objectsController.getAll);
  app.post('/objects', checkToken, isAuth, attachCurrentUser, objectsController.create);
  app.put('/object/:id', checkToken, isAuth, attachCurrentUser, objectsController.update);
  app.delete('/object/:id', checkToken, isAuth, attachCurrentUser, objectsController.remove);

  /**
   * Projects requests
   */
  app.get('/projects', checkToken, isAuth, attachCurrentUser, projectsController.getAll);
  app.post('/projects', checkToken, isAuth, attachCurrentUser, projectsController.create);
  app.put('/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.update);
  app.delete('/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.remove);

  /**
   * Stages requests
   */
  // app.get('/stages', stagesController.getAll);
  app.get('/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.get);
  app.post('/stages', checkToken, isAuth, attachCurrentUser, stagesController.create);
  app.put('/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.update);
  app.delete('/stage/:id', checkToken, isAuth, attachCurrentUser, stagesController.remove);

  /**
   * User request
   */
  app.put('/user/:id', checkToken, isAuth, attachCurrentUser, userController.update);

  /**
   * projectCategories request
   */
  app.get('/projectCategories', projectCategoriesController.getFirstLevel);
  app.post('/projectCategories', projectCategoriesController.create);
};
