import { model, Schema } from 'mongoose';

const ObjectCategorySchema = new Schema({
  /**
   * Название категории предмета
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Идентификатор родительской категории предмета
   */
  parent_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  /**
   * Есть ли подкатегории
   */
  hasChildren: {
    type: Boolean,
    required: false
  }
});

model('ObjectCategory', ObjectCategorySchema);
