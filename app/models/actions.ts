import { model, Schema } from 'mongoose';

const ActionsSchema = new Schema({
  /**
   * Название действия
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
    required: true,
  },
});

model('Actions', ActionsSchema);
