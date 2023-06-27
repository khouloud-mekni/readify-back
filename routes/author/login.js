const Author = require("../../models/Author");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = async (req, res) => {
  try {
    let SECRETKEY = process.env.SECRETKEY;
    let { email, password } = req.body;
    let author = await Author.findOne({ email });
    if (!author) {
      return res.status(401).json({
        status: false,
        error: "invalid email or password, please try again",
      });
    }
    let verifyPwd = await bcrypt.compare(password, author.password);
    if (!verifyPwd) {
      return res.status(401).json({
        status: false,
        error: "invalid email or password, please try again",
      });
    }
    delete author.password;
    let token = jwt.sign(
      {
        email: author.email,
        isBanned: author.isBanned,
        isAdmin: author.isAdmin,
        isVerified: author.isVerified,
        id: author._id,
      },
      SECRETKEY,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      status: true,
      data: {
        isBanned: author.isBanned,
        isAuthor: author.isAuthor,
        isVerified: author.isVerified,
        id: author._id,
        token,
      },
    });
  } catch (error) {
    if (error) throw error;
    res.status(400).json({ error });
  }
};