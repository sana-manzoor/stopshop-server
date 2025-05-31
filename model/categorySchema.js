const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema({

    cname:{
        type:String,
        required:true
    },
    cid:{
        type:Number,
        required:true
    }

   
})

const categories=mongoose.model('categories',categorySchema)

module.exports=categories