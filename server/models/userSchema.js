const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    referencecode:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

const users = new mongoose.model("empdatas",userSchema);

module.exports = users;