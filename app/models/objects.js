const mongoose = require('mongoose');

const ObjectsSchema = new mongoose.Schema({
  title: String,
});

mongoose.model('ObjectsModel', ObjectsSchema);
