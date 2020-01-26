const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: mongoose.Schema.Types.ObjectId,
  stages_id: mongoose.Schema.Types.ObjectId,
});

mongoose.model('Projects', ProjectsSchema);
