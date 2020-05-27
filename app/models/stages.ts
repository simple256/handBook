import { model, Schema } from 'mongoose';

const StagesSchema = new Schema({
    stages: [
        {
            _id: {
                type: Schema.Types.ObjectId,
                required: false,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: false,
            },
            actor_id: {
                type: Schema.Types.ObjectId,
                required: false,
            },
            object_id: {
                type: Schema.Types.ObjectId,
                required: false,
            },
            action_id: {
                type: Schema.Types.ObjectId,
                required: false,
            },
        },
    ],
});

model('Stages', StagesSchema);
