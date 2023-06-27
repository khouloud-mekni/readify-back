const mongoose =require('mongoose');
require("dotenv").config();

const DBUSER = process.env.DBUSER
const DBPWD = process.env.DBPWD
const connect =()=>{
    mongoose
    .connect(
        `mongodb+srv://${DBUSER}:${DBPWD}@onlinebooks.ak84fra.mongodb.net/MYLIBRARY`
    )
    .then(()=>console.log("connected to database"))
    .catch((err)=>console.log(err))
}
module.exports = connect