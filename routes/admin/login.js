const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    let SECRETKEY = process.env.SECRETKEY;
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: false,
        error: "invalid email or password, please try again",
      });
    }
    let verifyPwd = await bcrypt.compare(password, user.password);
    if (!verifyPwd) {
      return res.status(401).json({
        status: false,
        error: "invalid email or password, please try again",
      });
    }
    delete user.password;
    let token = jwt.sign(
      {
        email: user.email,
        isBanned: user.isBanned,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        id: user._id,
      },
      SECRETKEY,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      status: true,
      data: {
        isBanned: user.isBanned,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        id: user._id,
        token,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
};