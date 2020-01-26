const mongoose = require('mongoose');

const ProjectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: mongoose.Types.ObjectId,
  stages_id: mongoose.Types.ObjectId,
});

mongoose.model('Projects', ProjectsSchema);
