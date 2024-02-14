const express = require('express')
const {getAllBooks} = require('../controllers/books')
const {saveBook} = require('../controllers/books')
const {updateBook} = require('../controllers/books')
const {deleteBook} = require('../controllers/books')
const router = express.Router()

router
    .route("/")
    .get(getAllBooks)
    .post(saveBook)

router
    .route("/:id")
    .patch(updateBook)
    .delete(deleteBook)

module.exports = router