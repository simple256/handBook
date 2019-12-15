const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
  userId: String,
  token: String,
  refreshToken: String,
  ip: String,
  fingerprint: String,
  expiresAt: Date,
  createdAt: Date,
});

mongoose.model('Session', SessionSchema);
