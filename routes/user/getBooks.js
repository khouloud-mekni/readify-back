const Book = require("../../models/Book");
module.exports = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      status: true,
      data: books,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};