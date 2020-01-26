const mongoose = require('mongoose');

const OperationsSchema = new mongoose.Schema({
  title: String,
  description: String,
  actor_id: mongoose.Types.ObjectId,
  object_id: mongoose.Types.ObjectId,
  action_id: mongoose.Types.ObjectId,
});

mongoose.model('Operations', OperationsSchema);
