const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRETKEY = process.env.SECRETKEY;
module.exports = async (req, res, next) => {
  try {
    let token = req.header("jwt");
    if (!token) {
      res
        .status(401)
        .json({ status: false, message: "Beware, you are unauthorized" });
    }
    let verfiedToken = jwt.verify(token, SECRETKEY);
    if (!verfiedToken.isAdmin){
        res.status(401).json({status:false , message:"you are not allowed to do this action  "})
    }
    // add key to the object
    req.admin = verfiedToken;
    //  console.log(verfiedToken)
     next();
  } catch (error) {
    if (error.message) {
      console.log("error", error);
      return res.status(500).json({ error: error.message });
    }
    
  }
};