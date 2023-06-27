const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        userName: {
          type: String,
          required: true,
        },
        userImg: {
          type: String,
          default:"https://res.cloudinary.com/dw2xvijiu/image/upload/v1686245210/uploads/hqh13jzxp0g7ja6aveg3.png",
        },
        isBanned: {
          type: Boolean,
          default: false,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
        isUser: {
          type: Boolean,
          default: true,
        },
        isVerified: {
          type: Boolean,
          default: false,
        },
        releaseDate: {
          type: String,
        },
      },
      { timestamps: true }
)
module.exports = User = mongoose.model("User", userSchema);