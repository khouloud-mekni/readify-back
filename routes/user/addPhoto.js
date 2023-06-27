const User = require("../../models/User");
const cloudinary = require("../../middelwares/cloudinary");
const fs = require("fs");
module.exports = async (req, res) => {
  try {
    let { id } = req.auth;
    let { path } = req.file;
    console.log("path", path);
    const uploader = async (path) => await cloudinary.uploads(path, "uploads");
    const { url } = await uploader(path);
    fs.unlinkSync(path);
    const newUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          userImg: url,
        },
      },
      { new: true }
    );
    return res.status(200).json({
      status: true,
      message: "Profile photo added",
    });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ error });
  }
};