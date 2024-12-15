const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        require: [true, "name is require"]
    },
    email:{
        type:String,
        require:[true, "email is required"]
    },
    password:{
        type:String,
        require:[true, "password is required"]
    }

})

const userModel=mongoose.model("users",userSchema);
module.exports=userModel;