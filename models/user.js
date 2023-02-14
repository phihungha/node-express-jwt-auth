const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: "string",
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: "string",
    required: [true, "Please enter a password"],
    minLength: [6, "Minimum password length is 6"],
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
