import { model, Schema } from 'mongoose';

const ProjectCategorySchema = new Schema({
  /**
   * Название категории проекта
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Идентификатор родительской категории объекта
   */
  parent_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
});

model('ProjectCategory', ProjectCategorySchema);
