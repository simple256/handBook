const mongoose = require('mongoose');

const StagesSchema = new mongoose.Schema({
  stages: [mongoose.Types.ObjectId],
});

mongoose.model('Stages', StagesSchema);
