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
  app.get('/actions', authMiddleware, action.getAll);
  app.post('/actions', authMiddleware, action.create);
  app.put('/actions/:id', authMiddleware, action.update);
  app.delete('/actions/:id', authMiddleware, action.remove);

  // object
  app.get('/objects', authMiddleware, object.getAll);
  app.post('/objects', authMiddleware, object.create);
  app.put('/objects/:id', authMiddleware, object.update);
  app.delete('/objects/:id', authMiddleware, object.remove);

  // project
  app.get('/projects', authMiddleware, project.getAll);
  app.post('/projects', authMiddleware, project.create);
  app.put('/projects/:id', authMiddleware, project.update);
  app.delete('/projects/:id', authMiddleware, project.remove);

  // role
  app.get('/roles', authMiddleware, role.getAll);
  app.post('/roles', authMiddleware, role.create);
  app.put('/roles/:id', authMiddleware, role.update);
  app.delete('/roles/:id', authMiddleware, role.remove);

  // stage
  app.get('/stages', authMiddleware, stage.getAll);
  app.post('/stages', authMiddleware, stage.create);
  app.put('/stages/:id', authMiddleware, stage.update);
  app.delete('/stages/:id', authMiddleware, stage.remove);

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
