import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  /**
   * Почта пользователя
   */
  email: {
    type: String,
    required: true,
  },
  /**
   * Хэш пароля пользователя
   */
  password_hash: {
    type: String,
    required: true,
  },
  /**
   * Массив идентификаторов проектов, созданных пользователем
   */
  projects_id: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
  /**
   * Имя пользователя
   */
  name: {
    type: String,
    required: false,
  },
  /**
   * Роль пользователя системы
   */
  role: {
    type: String,
    required: false,
    default: 'user',
  },
});

model('User', UserSchema);
