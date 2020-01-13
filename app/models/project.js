const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: mongoose.Schema.Types.ObjectID,
  createdDate: mongoose.Schema.Types.Date,
  author_id: mongoose.Schema.Types.ObjectID,
  stages: [mongoose.Schema.Types.ObjectID],
});

mongoose.model('Project', ProjectSchema);
