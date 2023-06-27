const Book = require("../../models/Book");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    const books = await Book.find({ author: id });
    res.status(200).json({
      status: true,
      data: books,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};