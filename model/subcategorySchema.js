const mongoose=require('mongoose')

const subcategorySchema=new mongoose.Schema({

    sname:{
        type:String,
        required:true
    },
    cid:{
        type:Number,
        required:true
    },
    sid:{
        type:Number,
        required:true
    }

   
})

const subcategories=mongoose.model('subcategories',subcategorySchema)

module.exports=subcategories