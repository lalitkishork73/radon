const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productConroller")
const CommonMW = require("../middlewares/commonMiddlewares")


router.post("/createUser", CommonMW.isFree, userController.createUser);
router.post("/createProduct", productController.createProduct);
router.post("/createOrder", CommonMW.isFree, CommonMW.isOrderIDvalid,orderController.createOrder);
router.get('/getOrders', orderController.getOrders)

module.exports = router;