const Author = require("../../models/Author")
module.exports = async (req , res)=>{
    try {
        let {id} = req.params
        
        const bannedAuthor = await Author.findByIdAndUpdate(id , {
            $set:{
                isBanned:true,
            },
        },{
            new: true,
       })
        res.status(200).json({status : true , message: "Author was banned" , data: bannedAuthor})
    } catch (error) {
        if (error) throw error
        res.status(500).json({status:false , error})
    }
}