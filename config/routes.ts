import { actionsController, authController, stagesController } from '../app/controllers';
// const authMiddleware = require('../app/middleware/auth');

export = (app) => {
  // // product
  // app.get('/products', productsController.getAll);
  // app.post('/products', productsController.create);
  // app.put('/products/:id', productsController.update);
  // app.delete('/products/:id', productsController.remove);

  /**
   * Actions requests
   */
  app.get('/actions', actionsController.getAll);
  app.post('/actions', actionsController.create);
  app.put('/action/:id', actionsController.update);
  app.delete('/action/:id', actionsController.remove);

  /**
   * Stages requests
   */
  app.get('/stages', stagesController.getAll);
  app.post('/stages', stagesController.create);
  app.put('/stage/:id', stagesController.update);
  app.delete('/stage/:id', stagesController.remove);

  // auth
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
};
