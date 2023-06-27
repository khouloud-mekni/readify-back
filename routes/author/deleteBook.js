const Book = require("../../models/Book");

module.exports = async (req, res) => {
  try {
    let { bookId } = req.params;
    let { id } = req.auth;
    await Book.findOneAndRemove({ _id: bookId, author: id });
    res.status(200).json({
      status: true,
      message: "Your book has been deleted successfully",
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};