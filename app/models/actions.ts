import { model, Schema } from 'mongoose';

const ActionsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

model('Actions', ActionsSchema);
