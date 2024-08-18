const jwt = require('jsonwebtoken');

const validateToken = (req,res,next) => {
    let authHeader = req.headers.Authorization || req.headers.authorization 

    jwt.verify(authHeader,"sairam@2683",(err,decoded) => {
        if(err) {
            return res.status(401).json({message:"User is not authorized"})
        }
        req.user = decoded.user
        next()
    })
    console.log(authHeader);
    
}

module.exports = validateToken