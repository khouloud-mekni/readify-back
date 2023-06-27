const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { reviewId } = req.params;
    // let { id } = req.auth;
    await Review.findByIdAndRemove(reviewId);
    res
      .status(200)
      .json({ status: true, message: "Your review was deleted successfully" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
  }
};