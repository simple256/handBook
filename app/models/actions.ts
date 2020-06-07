import { model, Schema } from 'mongoose';

const ActionsSchema = new Schema({
  /**
   * Название действия
   */
  title: {
    type: String,
    required: true,
  },
});

model('Actions', ActionsSchema);
