// to get env file while server is running,import dotenv
require('dotenv').config()

//import express.js
const express=require('express')


//import cors
const cors=require('cors')

//create express server
const server1=express()

//implementing cors to server
server1.use(cors())

//parsing json data using server app
server1.use(express.json())

//import router
const router=require('./routes/routes')


//import connection.js
require('./connection/dbconnection')


//use router to server
server1.use(router)



// port numver configuration
const PORT=4000 || process.env.PORT

//serving upload files
// server1.use('/upload',express.static('./uploads'))


//to run server
server1.listen(PORT,()=>{
    console.log(`Server is started at ${PORT}`)
})

//resolve request to localhost:400
server1.get('/',(req,res)=>{
    res.send("<h1>Server is running successfully</h1>")
})

server1.post('/',(req,res)=>{
    res.send("<h1>Post Request Is successful</h1>")
})

