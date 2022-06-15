const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const midle = require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId", midle.auth, userController.getUserData)

router.put("/users/:userId", midle.auth, userController.updateUser)

router.delete("/users/:userId", midle.auth, userController.deleteUser)

router.post("/users/:userId/posts", midle.auth, midle.authorise,userController.postMessage)

module.exports = router;