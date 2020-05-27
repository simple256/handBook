import { model, Schema } from 'mongoose';

const ActorsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
});

model('Actors', ActorsSchema);
