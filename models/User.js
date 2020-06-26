const mongoose = require("mongoose");
const { Schema } = mongoose; //(these are equal) const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
