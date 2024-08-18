const userSchema = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const {username, email, password } = req.body
    if(!username || !email || !password){
        return res.status(401).json({"message":"All fields must be provided"})
    }

    const hashedPassword = await bcrypt.hash(password,10)
    let data = await userSchema.create({...req.body,password:hashedPassword})

    res.status(200).json(data)
}

const loginUser = async (req, res) => {
    const {email, password } = req.body
    if(!email || !password){
        return res.status(401).json({"message":"All fields must be provided"})
    }

    let user = await userSchema.findOne({email})
     
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign(
            {   user:{
                    username : user.username,
                    email : user.email,
                    id : user.id
                }
            },
            "sairam@2683",
            {expiresIn:"15m"}
        )
        res.status(200).json({accessToken})
    }else{
        res.status(401).json("No user found")
    }
}

const currentUser = async (req, res) => {
    // let contacts = await contactModel.find()
    res.status(200).json(req.user)
}

module.exports = {registerUser,loginUser,currentUser}