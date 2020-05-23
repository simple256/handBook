/**
 * Библиотека котроллеров
 */

// Инициализация моделей
require('../models/actions');
require('../models/actors');
require('../models/objects');
require('../models/projects');
require('../models/stages');
require('../models/user');
require('../models/projectCategories');

import { default as actionsController } from './actions';
import { default as actorsController } from './actors';
import { default as authController } from './auth';
import { default as objectsController } from './objects';
import { default as projectCategoriesController } from './projectCategories';
import { default as projectsController } from './projects';
import { default as stagesController } from './stages';
import { default as userController } from './user';

export {
  projectCategoriesController,
  actionsController,
  actorsController,
  objectsController,
  projectsController,
  stagesController,
  authController,
  userController,
};
