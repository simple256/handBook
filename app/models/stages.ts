import * as mongoose from 'mongoose';
import { model, Schema } from 'mongoose';
import * as history from 'mongoose-history-plugin';

const StagesSchema = new Schema({
  /**
   * Название этапа
   */
  title: {
    type: String,
    required: true,
  },
  /**
   * Описание этапа
   */
  description: {
    type: String,
    required: false,
  },
  stages: [
    {
      /**
       * Идентификаторы участников этапа
       */
      actors_id: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: [],
      },
      /**
       * Идентификаторы объектов
       */
      objects_id: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: [],
      },
      /**
       * Идентификаторы действий
       */
      actions_id: {
        type: [Schema.Types.ObjectId],
        required: false,
        default: [],
      },
    },
  ],
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
  modelName: 'stage__history',
  embeddedDocument: false,
  embeddedModelName: '',
  ignorePopulatedFields: false,
};

/**
 * Подключение плагина истории
 */
StagesSchema.plugin(history(historyOptions));

model('Stages', StagesSchema);
