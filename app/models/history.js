const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  history_object_id: mongoose.Schema.ObjectID,
  type: String,
  creationDate: mongoose.Schema.Date,
  status: String,
});

mongoose.model('History', HistorySchema);
