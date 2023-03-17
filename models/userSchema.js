const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    Required: true,
  },
  age: {
    type: String,
    Required: true,
  },
  email: {
    type: String,
    Required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    Required: true,
  },
  work: {
    type: String,
    Required: true,
  },
  add: {
    type: String,
    Required: true,
  },
  desc: {
    type: String,
    Required: true,
  },
});

const users = new mongoose.model("users", userSchema);

module.exports = users;
