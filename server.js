const express = require('express');
const app = express();
const contentroutes = require('./routes/contactRoutes.js');
const userroutes = require('./routes/userRoutes.js');
const connetDB = require('./config/dbConnection.js');
const validateToken = require('./middleware/validateTokenHandle.js');

connetDB()
app.use(express.json())
// app.use(validateToken)

app.get('/', (req,res)=>{
    res.status(200).json({success:"working"})
})

app.use('/api/contacts',contentroutes)
app.use('/api/users',userroutes)

app.listen(3000,()=>{
    console.log("port open on http://localhost:3000");
    
})