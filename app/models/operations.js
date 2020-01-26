const mongoose = require('mongoose');

const OperationsSchema = new mongoose.Schema({
  title: String,
  description: String,
  actor_id: mongoose.Schema.Types.ObjectId,
  object_id: mongoose.Schema.Types.ObjectId,
  action_id: mongoose.Schema.Types.ObjectId,
});

mongoose.model('Operations', OperationsSchema);
