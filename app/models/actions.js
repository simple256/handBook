const mongoose = require('mongoose');

const ActionsSchema = new mongoose.Schema({
  title: String,
});

mongoose.model('Actions', ActionsSchema);
