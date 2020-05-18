import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  password: String,
});

model('User', UserSchema);
