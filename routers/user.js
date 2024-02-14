const express = require('express')
const { updateBook } = require('../controllers/books')
const router = express.Router()
const {saveUser} = require('../controllers/user')
const {getAllUsers} = require('../controllers/user')
const {getUser} = require('../controllers/user')
const {updateUser} = require('../controllers/user')
const {deleteUser} = require('../controllers/user')

router
    .route("/")
    .post(saveUser)
    .get(getAllUsers)

router
    .route("/:id")
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router