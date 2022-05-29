const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, index: 1 },
  questions: [String],
  answers: [String],
  reply: [String],
  vote: [Number],
  tags: [{ type: String, index: 1 }],
  views: { type: Number },
  reputation: { type: String },
});

module.exports = mongoose.model('User', UserSchema);
