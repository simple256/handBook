import { model, Schema } from 'mongoose';

const ObjectsSchema = new Schema({
  /**
   * Название объекта взаимодействия
   */
  title: {
    type: String,
    required: true,
  },
});

model('Objects', ObjectsSchema);
