const Book = require("../../models/Book");
const cloudinary = require("../../middelwares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { title, rate, desc, releaseDate, category } = req.body;
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    if (req.file) {
      let { path } = req.file;
      const { url } = await uploader(path);
      fs.unlinkSync(path);
      const newBook = await new Book({
        title,
        rate,
        desc,
        releaseDate,
        author: id,
        category,
        bookImg: url,
      });
      const book = await newBook.save();
      return res.status(200).json({
        status: true,
        message: "You has been added successfully",
        data: book,
      });
    } else {
      const newBook = await new Book({
        title,
        rate,
        desc,
        releaseDate,
        author: id,
        bookImg:
          "https://res.cloudinary.com/dc8u6ydtu/image/upload/v1675421274/uploads/lhdf1t7biats1nv5jdv5.png",
      });
      const book = await newBook.save();
      return res.status(200).json({
        status: true,
        message: "You has been added successfully",
        data: book,
      });
    }
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error });
  }
};