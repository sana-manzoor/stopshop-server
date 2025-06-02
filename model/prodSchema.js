const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    cid: {
        type: Number,
        required: true
    },
    sid:{
        type:Number,
        required:true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    sname:{
         type:String,
        required:true

    }


})

const products = mongoose.model('products', prodSchema)

module.exports = products