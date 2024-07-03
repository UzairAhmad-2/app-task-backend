const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firebaseId: {
    type: String,
    required: "Firebase ID is required",
  },
  name: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Email is required",
  },
  bio: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
