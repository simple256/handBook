import { model, Schema } from 'mongoose';

const StagesSchema = new Schema({
  stages_id: {
    type: [Schema.Types.ObjectId],
    required: true,
  },
});

model('Stages', StagesSchema);
