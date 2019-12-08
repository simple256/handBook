const mongoose = require('mongoose');

const ActionSchema = new mongoose.Schema({
  description: String,
  roles: [mongoose.Schema.Types.ObjectID],
  duration: mongoose.Schema.Types.Number,
  objects: [mongoose.Schema.Types.ObjectID],
});

mongoose.model('Action', ActionSchema);
