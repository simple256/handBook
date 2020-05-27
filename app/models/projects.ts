import { model, Schema } from 'mongoose';

const ProjectsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    stages_id: {
        type: Schema.Types.ObjectId,
        required: false,
    },
});

model('Projects', ProjectsSchema);
