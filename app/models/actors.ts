import { model, Schema } from 'mongoose';

const ActorsSchema = new Schema({
  /**
   * Название исполнителя
   */
  title: {
    type: String,
    required: true,
  },
});

model('Actors', ActorsSchema);
