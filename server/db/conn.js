const mongoose = require("mongoose");

const DB = "mongodb+srv://Anukesh:anukesh@cluster0.spyt7bg.mongodb.net/new?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection Start")).catch((error)=> console.log(error.message));