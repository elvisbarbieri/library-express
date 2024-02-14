const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characteres']
    },
    author:{
        type: String,
        required: [true,'must provide author name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characteres']
    }
})

module.exports = mongoose.model('Book',BookSchema)