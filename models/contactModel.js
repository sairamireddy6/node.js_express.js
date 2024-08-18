const mongoose = require("mongoose");


const contactModel = mongoose.Schema({
    "name":{
        type:String,
        required: [true,"Please enter a name"]
    },
    "email":{
        type:String,
        required: [true,"Please enter a email"]
    },
    "phone":{
        type:Number,
        required: [true,"Please enter a phone"]
    }
},
{
    timestamps:true
}
)

module.exports = mongoose.model("Contact",contactModel)