const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  description: String,
  name: String,
});

mongoose.model('Role', RoleSchema);
