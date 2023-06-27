const User = require("../../models/User");
module.exports = async (req, res) => {
  try {
    let { user } = req.query;
    const userr = await User.findById(user).select({ password: 0, email: 0 });
    res.status(200).json({
      status: true,
      data: userr,
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ status: false, error });
  }
};