const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.index);
router.get('/add', bookController.showAddForm);
router.post('/add', bookController.addBook);
router.get('/book/:id', bookController.bookDetails);

module.exports = router;
