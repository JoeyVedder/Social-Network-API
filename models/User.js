const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match a valid email address'],
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

// Add virtual for friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Ensure that the virtuals are included in JSON output
userSchema.set('toJSON', { virtuals: true });

// Create the User model
module.exports = mongoose.model('User', userSchema);
