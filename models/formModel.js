const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"]
    },
    phone:{
        type:Number,
        required:[true,"Please Enter Phone Number"],
        
    },
    text:{
        type:String,
        
    },
     createdAt:{
        type:Date,
        default:Date.now
     }
})

module.exports = mongoose.model("Form",formSchema);