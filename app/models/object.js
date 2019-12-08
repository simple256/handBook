const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema({
  description: String,
  name: String,
  images: [String],
  params: [{
    name: String,
    value: String,
  }],
});

mongoose.model('Object', ObjectSchema);
