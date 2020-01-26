const mongoose = require('mongoose');

const ActorsSchema = new mongoose.Schema({
  title: String,
});

mongoose.model('Actors', ActorsSchema);
