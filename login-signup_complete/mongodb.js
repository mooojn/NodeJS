const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crypto");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("users", userSchema);
module.exports = User;