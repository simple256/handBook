import { model, Schema } from 'mongoose';

const ProjectCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  parent_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
});

model('ProjectCategory', ProjectCategorySchema);
