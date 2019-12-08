const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  description: String,
  name: String,
  permissions: [String],
});

mongoose.model('Role', RoleSchema);
