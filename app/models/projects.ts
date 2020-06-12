import * as mongoose from 'mongoose';
import { model, Schema } from 'mongoose';
import * as history from 'mongoose-history-plugin';

const ProjectsSchema = new Schema({
  /**
   * Доступность проекта для поиска
   */
  is_public: {
    type: Boolean,
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
   * Текущий редактор проекта
   */
  editor_id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  /**
   * Автор проекта
   */
  creator_id: {
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
   * Описание проекта
   */
  description: {
    type: String,
    required: false,
  },
  /**
   * Категория, к которой относится проект
   */
  category_id: {
    type: Schema.Types.ObjectId,
    // FIXME: Включить по готовности projectCategories
    required: false,
  },
  /**
   * Массив идентификаторов этапов проекта
   */
  stages_id: {
    type: Schema.Types.ObjectId,
    required: false,
  },

});

/**
 * Конфигурация для плагина истории
 */
const historyOptions = {
  mongoose: mongoose,
  userCollection: 'users',
  userCollectionIdType: false,
  accountCollection: 'accounts',
  accountCollectionIdType: false,
  userFieldName: 'user',
  accountFieldName: 'account',
  timestampFieldName: 'timestamp',
  methodFieldName: 'method',
  collectionIdType: false,
  ignore: [],
  noDiffSave: false,
  noDiffSaveOnMethods: ['delete'],
  noEventSave: true,
  modelName: 'projects__history',
  embeddedDocument: false,
  embeddedModelName: '',
  ignorePopulatedFields: false,
};

/**
 * Подключение плагина истории
 */
ProjectsSchema.plugin(
  history(historyOptions),
);

model('Projects', ProjectsSchema);
