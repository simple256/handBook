import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password_hash: {
    type: String,
    required: true,
  },
  projects_id: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
});

model('User', UserSchema);
