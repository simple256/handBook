const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  parent: mongoose.Schema.Types.ObjectID,
  subcategories: [mongoose.Schema.Types.ObjectID],
});

mongoose.model('Category', CategorySchema);
