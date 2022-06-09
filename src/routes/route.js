const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.post("/createAuthor", authorController.createAuthor)
router.post("/createBook", bookController.createBook)
router.post("/createPublisher", publisherController.createPublisher)

router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getBooksData", bookController.getBooksData)
router.get("/getPublisher", publisherController.getPublisher)
router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.put("/books", bookController.updateBooks);
router.put("/updateRating", bookController.updateRating);

module.exports = router;