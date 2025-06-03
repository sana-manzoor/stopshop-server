const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    pid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },

    price:{
        type:Number,
        required:true
    },
  
    image: {
        type: String,
        required:true,
     
    },
    uid: {
        type: String, 
        required:true,
    },
   
    total:{
        type:Number,
       
    }


   
})

cartSchema.index({ pid: 1, uid: 1 }, { unique: true })

const carts=mongoose.model('carts',cartSchema)

module.exports=carts