// const products = require('../app/controllers/products');
const auth = require('../app/controllers/auth');
const categories = require('../app/controllers/categories');
const action = require('../app/controllers/action');
const object = require('../app/controllers/object');
const project = require('../app/controllers/project');
const role = require('../app/controllers/role');
const stage = require('../app/controllers/stage');
const authMiddleware = require('../app/middleware/auth');

module.exports = (app) => {
  // // product
  // app.get('/products', authMiddleware, products.getAll);
  // app.post('/products', authMiddleware, products.create);
  // app.put('/products/:id', authMiddleware, products.update);
  // app.delete('/products/:id', authMiddleware, products.remove);

  // action
  app.get('/actions', action.getAll);
  app.post('/actions', action.create);
  app.put('/actions/:id', action.update);
  app.delete('/actions/:id', action.remove);

  // object
  app.get('/objects', object.getAll);
  app.post('/objects', object.create);
  app.put('/objects/:id', object.update);
  app.delete('/objects/:id', object.remove);

  // project
  app.get('/projects', project.getAll);
  app.post('/projects', project.create);
  app.put('/projects/:id', project.update);
  app.delete('/projects/:id', project.remove);

  // role
  app.get('/roles', role.getAll);
  app.post('/roles', role.create);
  app.put('/roles/:id', role.update);
  app.delete('/roles/:id', role.remove);

  // stage
  app.get('/stages', stage.getAll);
  app.post('/stages', stage.create);
  app.put('/stages/:id', stage.update);
  app.delete('/stages/:id', stage.remove);

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

  // category
  app.get('/categoryMenu', categories.getInitialMenu);
  app.get('/category/:id', categories.getSubMenu);
  app.get('/category', categories.getAll);
  app.post('/category', categories.create);
  app.put('/category/:id', categories.update);
  app.delete('/category/:id', categories.remove);
};
