const mongoose = require('mongoose');

const StageSchema = new mongoose.Schema({
  name: String,
  actions: [mongoose.Schema.Types.ObjectID],
});

mongoose.model('Stage', StageSchema);
