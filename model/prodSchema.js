const mongoose=require('mongoose')

const prodSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    cid:{
        type:Number,
        required:true
    },
       price:{
        type:Number,
        required:true
    },
       description:{
        type:Number,
        required:true
    }

   
})

const subcategories=mongoose.model('subcategories',subcategorySchema)

module.exports=subcategories