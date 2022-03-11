// Import express
const express = require('express')
const app = express()
const path = require('path')




// middleware
const port = 8000
const static_path = path.join(__dirname,'./../public')
app.use(express.static(static_path))




// creating server
app.get('/',(req,res)=>{
    res.send("hello world")
})

// Listining Server
app.listen(port ,()=>{
    console.log(`server is running on port localhost:${port} `)
})


