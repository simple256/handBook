import { model, Schema } from 'mongoose';

const ObjectsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

model('Objects', ObjectsSchema);
