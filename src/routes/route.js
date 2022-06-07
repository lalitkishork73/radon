const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');

// APi's waiting for request and and ready for responce
router.post('/createBook', bookController.createBook);
router.post('/createAuthor', authorController.createAuthor);
router.get('/getbooks', bookController.getbooks);
router.get('/getAuthor', authorController.getAuthor);
router.get("/authorId", authorController.authorId);
router.get("/authorUpdates", authorController.authorUpdates);
router.get("/bookPrice", authorController.bookPrice);

module.exports = router;