const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: "user",
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("User", userModel);
