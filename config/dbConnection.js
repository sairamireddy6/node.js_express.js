const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const connetDB = async ()=>{
    await mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
        console.log("Connected to Mongoose");
    })
}

module.exports = connetDB