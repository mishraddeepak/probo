const express =require('express')
require('dotenv').config()
const port =process.env.PORT


const app = express()

app.use('/api',require('./routes/index.routes'))

app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting the server",err)
    }
    console.log("Server is started on port:",port)
})