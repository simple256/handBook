const mongoose = require('mongoose');

const StagesSchema = new mongoose.Schema({
  stages_id: [mongoose.Schema.Types.ObjectId],
});

mongoose.model('Stages', StagesSchema);
