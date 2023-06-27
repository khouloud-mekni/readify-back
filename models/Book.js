const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    bookImg: {
      type: String,
    },
    rate: {
      type: Number,
    },
    desc: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    releaseDate: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Book = mongoose.model("Book", bookSchema);