import { model, Schema } from 'mongoose';

const StagesSchema = new Schema({
  stages: [
    {
      /**
       * Идентификатор этапа
       */
      _id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
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
      /**
       * Идентификатор участника этапа
       */
      actor_id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      /**
       * Идентификатор объекта
       */
      object_id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
      /**
       * Идентификатор предмета
       */
      action_id: {
        type: Schema.Types.ObjectId,
        required: false,
      },
    },
  ],
});

model('Stages', StagesSchema);
