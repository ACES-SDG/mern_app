const express = require('express');
const { getAllBooks, addBook, getBYId, updateBook, deleteBook } = require('../controllers/bookscontroller');
const router = express.Router();
const Book = require("../model/Book")

router.get('/',getAllBooks);
router.post('/',addBook);
router.get('/:id',getBYId);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook)

module.exports = router