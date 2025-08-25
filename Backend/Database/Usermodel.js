const mongoose= require('mongoose');


const userSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Mobile:Number
})

module.exports=mongoose.model("Users",userSchema);