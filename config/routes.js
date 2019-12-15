const products = require('../app/controllers/products');
const auth = require('../app/controllers/auth');
const categories = require('../app/controllers/categories');
const authMiddleware = require('../app/middleware/auth');

module.exports = (app) => {
  // product
  app.get('/products', authMiddleware, products.getAll);
  app.post('/products', authMiddleware, products.create);
  app.put('/products/:id', authMiddleware, products.update);
  app.delete('/products/:id', authMiddleware, products.remove);

  // auth
  app.post('/signin', auth.signIn);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123"
  // }
  app.put('/register', auth.register);
  // {
  //   "email": "aaaaa2222a@mail",
  //   "password": "123123123123123123",
  //   "confirmationPassword": "123123123123123123"
  // }
  app.post('/refresh-token', auth.updateSession);

  app.get('/categories', categories.getInitialMenu);
  app.get('/categories/:id', categories.getSubMenu);
};
