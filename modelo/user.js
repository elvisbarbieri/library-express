const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characteres']
    },
    age:{
        type: Number,
        min: [12,"You must have more than 12 years to borrow a book"],   
    },
    gender:{
        type: String,
        enum: ['M','F'],
        required: true
    }
})

module.exports = mongoose.model('User',UserSchema)