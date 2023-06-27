const Book = require("../../models/Book")
module.exports = async (req , res ) => {
    try {
        let { bookId } = req.params
        await Book.findByIdAndDelete(bookId)
        res.status(200).json({status: true ,msg: "Book was deleted successfully"})
    } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
    }
}
