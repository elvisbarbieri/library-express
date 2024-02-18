const mongoose = require('mongoose')

const BorrowedBookSchema = new mongoose.Schema({

    name:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    start_date:{type: Date, required: true},
    final_date:{type: Date, required: true},
    has_return: {type:Boolean,required:true}
})

module.exports = mongoose.model('BorrowedBook',BorrowedBookSchema)