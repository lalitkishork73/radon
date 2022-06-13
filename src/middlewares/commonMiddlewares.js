
const ProductModel = require("../models/productModel")
const UserModel = require("../models/userModel")
const isFree = function (req, res, next) {
    let freeUser = req.headers.isfreeappuser
    if (freeUser) {
        next()
    } else {
        res.send({ msg: "The request is missing a mandatory header!" })
    }
}


const isOrderIDvalid = async function (req, res, next) {
    let order = req.body
    let userIDOrder = order.userId;
    let productIDOrder = order.productId;

    let userID = await UserModel.findById(userIDOrder);
    let productId = await ProductModel.findById(productIDOrder);
 
    console.log(userID);
    if (userIDOrder != userID._id) {
        res.send("user Id is not valid,  No such User in Our List !")
    }
    else if (productIDOrder != productId._id) {
        res.send("product Id is not valid,  No such Product in Our List !")
    }
    else{
        next();
    }
}
module.exports.isFree = isFree;
module.exports.isOrderIDvalid = isOrderIDvalid;
