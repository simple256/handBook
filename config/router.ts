import {
  actionsController,
  actorsController,
  authController,
  objectCategoriesController,
  objectsController,
  projectCategoriesController,
  projectsController,
  stagesController,
  userController,
} from '../app/controllers';
import { attachCurrentUser, checkToken, isAdmin, isAuth, isModerator } from '../app/middleware';

export = (app) => {
  /**
   * Actions requests
   */
  app.get('/api/actions', checkToken, isAuth, attachCurrentUser, actionsController.getAll);
  app.get('/api/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.get);
  app.post('/api/actions', checkToken, isAuth, attachCurrentUser, actionsController.create);
  app.put('/api/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.update);
  app.delete('/api/action/:id', checkToken, isAuth, attachCurrentUser, actionsController.remove);

  /**
   * Actors requests
   */
  app.get('/api/actors', checkToken, isAuth, attachCurrentUser, actorsController.getAll);
  app.get('/api/actor:id', checkToken, isAuth, attachCurrentUser, actorsController.get);
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
  app.get('/api/projects', checkToken, isAuth, attachCurrentUser, projectsController.getAllUsersProject);
  app.post('/api/projects', checkToken, isAuth, attachCurrentUser, projectsController.create);
  app.post('/api/projects/saveById', checkToken, isAuth, attachCurrentUser, projectsController.saveProjectToUser);
  app.put('/api/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.update);
  app.delete('/api/project/:id', checkToken, isAuth, attachCurrentUser, projectsController.remove);
  app.get('/api/projectHistory/:id', checkToken, isAuth, attachCurrentUser, projectsController.getProjectHistory);
  app.post('/api/project/copy/:id', checkToken, isAuth, attachCurrentUser, projectsController.createCopyOfProject)

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

  //#region projectCategories request
  /**
   * projectCategories request
   */
  app.post(
    '/api/projectCategories/create',
    checkToken,
    isAuth,
    attachCurrentUser,
    isAdmin,
    projectCategoriesController.create,
  );
  app.post(
    '/api/projectCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    isAdmin,
    projectCategoriesController.update,
  );
  app.get(
    '/api/projectCategories/root',
    checkToken,
    isAuth,
    attachCurrentUser,
    projectCategoriesController.getFirstLevel,
  );
  app.get(
    '/api/projectCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    projectCategoriesController.getChildrenCategories,
  );
  //#endregion projectCategories request
  //#region objectCategories request
  app.post(
    '/api/objectCategories/create',
    checkToken,
    isAuth,
    attachCurrentUser,
    isAdmin,
    objectCategoriesController.create,
  );
  app.post(
    '/api/objectCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    isModerator,
    objectCategoriesController.update,
  );
  app.get(
    '/api/objectCategories/root',
    checkToken,
    isAuth,
    attachCurrentUser,
    objectCategoriesController.getFirstLevel,
  );
  app.get(
    '/api/objectCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    objectCategoriesController.getChildrenCategories,
  );
  //#endregion objectCategories request
  //#region actionCategories request
  app.post(
    '/api/actionCategories/create',
    checkToken,
    isAuth,
    attachCurrentUser,
    isAdmin,
    objectCategoriesController.create,
  );
  app.post(
    '/api/actionCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    isModerator,
    objectCategoriesController.update,
  );
  app.get(
    '/api/actionCategories/root',
    checkToken,
    isAuth,
    attachCurrentUser,
    objectCategoriesController.getFirstLevel,
  );
  app.get(
    '/api/actionCategories/:id',
    checkToken,
    isAuth,
    attachCurrentUser,
    objectCategoriesController.getChildrenCategories,
  );
  //#endregion AutoComplete JS
};
