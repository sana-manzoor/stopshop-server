const mongoose = require('mongoose')

const recentSchema = new mongoose.Schema({
    pid: {
        type: String,
        required: true
 
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true

    },

    image: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
       
    }
    
},
{
    timestamps: true 
  })

recentSchema.index({ pid: 1, uid: 1 }, { unique: true })

const recents = mongoose.model('recents', recentSchema)
module.exports = recents