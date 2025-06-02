const mongoose = require('mongoose')

const wishSchema = new mongoose.Schema({
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
})

const wishes = mongoose.model('wishes', wishSchema)
module.exports = wishes