const express = require('express');
const userModel = require('../models/userModel.js');
const router = express.Router();
const userController = require("../controller/userController.js");

router.post("/createNewBook", userController.addBooks)
router.get("/getAllBooks", async function (req, res) {
    let allusers = await userModel.find()
    // let saveData = userModel.create(data);
    res.send({ msg: allusers });
})


module.exports = router;