const Author = require("../../models/Author");
module.exports = async (req, res) => {
  try {
    let { email } = req.query;
    let verifiedAuthor = await Author.findOneAndUpdate(
      { email },
      {
        $set: {
          isVerified: true,
        },
      },
      { new: true }
    );
    res.status(200).json({ status: true, data: verifiedAuthor });
  } catch (error) {
    if (error) throw error;
    res.status(401).json({ status: false, error });
  }
};