const Author = require("../../models/Author");
module.exports = async (req, res) => {
  try {
    let { user } = req.query;
    const authorr = await Author.findById(user).select({
      password: 0,
      email: 0,
    });
    res.status(200).json({
      status: true,
      data: authorr,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};