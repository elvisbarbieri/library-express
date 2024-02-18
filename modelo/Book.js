const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [100,'name can not be more than 100 characteres']
    },
    author:{
        type: String,
        required: [true,'must provide author name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characteres']
    },
    is_available:{
        type:Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model('Book',BookSchema)