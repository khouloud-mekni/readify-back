const Author = require("../../models/Author")
module.exports = async( req, res)=>{
    try {
        const authors = await Author.find().select({email:0 , password:0})
        res.status(200).json({
            status: true,
            data : authors ,
        });
    } catch (error) {
        if (error) throw error
        res.status(500).json({status : false , error})
    }
}