const Review = require("../../models/Review");
module.exports = async (req, res) => {
  try {
    let { review } = req.body;
    let { reviewId } = req.params;
    // let { id } = req.auth;
    let updatedReview = await Review.findByIdAndUpdate(reviewId, { $set: {review,},},{ new: true });
    // console.log(reviewId , "review id")
    // console.log(updatedReview , "updatedreview")
    res.status(200).json({ status: true, msg : "review has been updated" ,data: updatedReview });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
  }
};