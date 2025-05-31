const mongoose=require('mongoose')

const connectString=process.env.DATABASE

mongoose.connect(connectString).then(()=>{
    console.log("MongoDB server is connected!!")
}).catch(rej=>{
    console.log("MongoDB connection is Failed!!",rej)
})
