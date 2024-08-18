const { registerUser, loginUser, currentUser } = require('../controllers/userController')
const validateToken = require('../middleware/validateTokenHandle')

let route = require('express').Router()

route.post('/register',registerUser)

route.post('/login',loginUser)

route.get('/current',validateToken ,currentUser)


module.exports = route