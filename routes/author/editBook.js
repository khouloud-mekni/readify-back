const Book = require("../../models/Book");
const cloudinary = require("../../middelwares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { bookId } = req.params;
    let { title, rate, desc, releaseDate } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    if (req.file) {
      let { path } = req.file;
      const { url } = await uploader(path);
      fs.unlinkSync(path);
      const newBook = await Book.findOneAndUpdate(
        {
          author: id,
          _id: bookId,
        },
        {
          $set: {
            bookImg: url,
            title,
            rate,
            desc,
            releaseDate,
          },
        },
        { new: true }
      );
      return res.status(200).json({
        status: true,
        message: "Your book has been updated successfully",
        data: newBook,
      });
    } else {
      const newBook = await Book.findOneAndUpdate(
        {
          author: id,
          _id: bookId,
        },
        {
          $set: {
            title,
            rate,
            desc,
            releaseDate,
          },
        },
        { new: true }
      );
      return res.status(200).json({
        status: true,
        message: "Your book has been updated successfully",
        data: newBook,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error });
  }
};