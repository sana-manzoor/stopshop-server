
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    phone:{
        type:Number,
        required:true

    },
    password:{
        type:String,
        required:true,

    }

   
})

const users=mongoose.model('users',userSchema)

module.exports=users