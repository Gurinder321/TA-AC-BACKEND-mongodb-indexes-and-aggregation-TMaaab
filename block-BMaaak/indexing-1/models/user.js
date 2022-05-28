var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String },
  //   define unique indexes on username
  username: { type: String, required: true },
  //   define unique indexes on email
  email: { type: String, required: true },
  address: {
    city: String,
    state: String,
    country: String,
    pin: Number,
  },
});

// compound index
userSchema.index({ 'address.state': 1, 'address.country': 1 });

// multikey index
userSchema.index({ favorites: 1 });

// unique index property
userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
