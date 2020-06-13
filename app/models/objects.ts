import { model, Schema } from 'mongoose';

const ObjectsSchema = new Schema({
  /**
   * Название объекта взаимодействия
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Категория, к которой относится объект
   */
  category_id: {
    type: Schema.Types.ObjectId,
    // FIXME: Включить по готовности objectCategories
    required: false,
  },
});

model('Objects', ObjectsSchema);
