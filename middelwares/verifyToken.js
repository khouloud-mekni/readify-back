const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRETKEY = process.env.SECRETKEY;
module.exports = async (req, res, next) => {
  try {
    let { user } = req.query;
    let token = req.header("jwt");
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "Beware, you are unauthorized" });
    }
    let verfiedToken = jwt.verify(token, SECRETKEY);
    if (verfiedToken.id !== user) {
      return res
        .status(400)
        .json({ tokenNotMatched: true, message: "Invalid token" });
    }
    req.auth = verfiedToken;
    next();
  } catch (error) {
    if (error.message) {
      return res.status(500).json({ tokenExpired: true, error: error.message });
    }
    res.status(500).json({ error });
  }
};































// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const SECRETKEY = process.env.SECRETKEY;
// module.exports = async (req, res, next) => {
//   try {
//     // let { user } = req.query;
//     let token = req.header("jwt");
//     if (!token) {
//       res
//         .status(401)
//         .json({ status: false, message: "Beware, you are unauthorized" });
//     }
//     let verfiedToken = jwt.verify(token, SECRETKEY);
//     // add key to the object
//       req.auth = verfiedToken;
      
//     // const user = await User.findById()
   
//     // console.log("user verifiedtoken",user)
//     //  if (verfiedToken.id === user) {
//     //   return res.status(400).json({tokenNotMatched: true , message: "Invalid Token"  })
//     //  }
//      next();
//   } catch (error) {
//     if (error.message) {
//       console.log("error", error);
//       return res.status(500).json({ error: error.message });
//     }
    
//   }
// };