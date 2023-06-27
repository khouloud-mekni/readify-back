const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    authImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dw2xvijiu/image/upload/v1687356917/uploads/u5k4j4qfru81n5lf1y0r.png" ,
    },
    isAuthor: {
      type: Boolean,
      default: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  //   books:[{
  //     book:{type: mongoose.Schema.Types.ObjectId, 
  //     ref: "Book" }
  // }]
  },
  { timestamps: true }
);

module.exports = Author = mongoose.model("Author", authorSchema);