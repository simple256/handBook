const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  roles: [mongoose.Schema.Types.ObjectID],
  projectList: [mongoose.Schema.Types.ObjectID],
});

mongoose.model('User', UserSchema);
