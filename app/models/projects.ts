import { model, Schema } from 'mongoose';

const ProjectsSchema = new Schema({
  /**
   * Автор проекта
   */
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  /**
   * Дата создания проекта
   */
  created_date: {
    type: Schema.Types.Date,
    required: true,
  },
  /**
   * Название проекта
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Описание проекта
   */
  description: {
    type: String,
    required: false,
  },
  /**
   * Категория, к которой относится проект
   */
  category: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  /**
   * Массив идентификаторов этапов проекта
   */
  stages_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  /**
   * Доступность проекта для поиска
   */
  is_public: {
    type: Boolean,
    required: true,
  },
});

model('Projects', ProjectsSchema);
