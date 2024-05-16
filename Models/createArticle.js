const mongoose = require("mongoose");
const { Schema } = mongoose;

const createArticle = new Schema(
   {
      username: {
         type: String,
         required: true,
      },
      article_name: {
         type: String,
         required: true,
      },
      article_title: {
         type: String,
         required: true,
      },
      article_desc: {
         type: String,
         required: true,
      },
      publish: {
         type: Boolean,
         default: false,
      },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Article", createArticle);
