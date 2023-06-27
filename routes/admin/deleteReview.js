const Review = require("../../models/Review")
module.exports = async (req , res ) => {
    try {
        let { reviewId } = req.params
        await Review.findByIdAndDelete(reviewId)
        res.status(200).json({status: true ,msg: "Review was deleted successfully"})
    } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: true, error });
    }
}
