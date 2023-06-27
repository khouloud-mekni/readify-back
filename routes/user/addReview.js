const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { review } = req.body;
    let { bookId } = req.params;
    let { id } = req.auth;
    let newReview = await new Review({
      review,
      user: id,
      book: bookId,
    });
    const savedReview = await newReview.save();
    res.status(200).json({ status: true, data: savedReview });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
  }
};