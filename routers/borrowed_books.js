const express = require('express');
const router = express.Router();
const {saveBorrow,getBorrowedBook,getBorrowedBooks} = require('../controllers/borrowed_books')

router
.route("/")
.post(saveBorrow)
.get(getBorrowedBooks)


router
.route("/:id")
.get(getBorrowedBook)

module.exports = router