import { authController, productsController } from '../app/controllers';
const authMiddleware = require('../app/middleware/auth');

export = (app) => {
  // product
  app.get('/products', authMiddleware, productsController.getAll);
  app.post('/products', authMiddleware, productsController.create);
  app.put('/products/:id', authMiddleware, productsController.update);
  app.delete('/products/:id', authMiddleware, productsController.remove);

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
