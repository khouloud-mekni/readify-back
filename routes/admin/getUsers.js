const User = require("../../models/User")
module.exports = async( req, res)=>{
    try {
        const users = await User.find().select({email:0 , password:0})
        res.status(200).json({
            status: true,
            data : users ,
        });
    } catch (error) {
        if (error) throw error
        res.status(500).json({status : false , error})
    }
}