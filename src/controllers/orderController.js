

const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const createOrder = async function (req, res) {
    let data = req.body;
    let freeUser = req.headers.isfreeappuser;

    if (freeUser === "true") {
        data.amount = 0;
        freeUser = true;
        const UserBalance = await orderModel.create(data)
        res.send({ Order: UserBalance })
    }
    else {
        let order = req.body
        let userIDOrder = order.userId;
        let productIDOrder = order.productId;

        const userNew = await userModel.findOneAndUpdate({ _id: userIDOrder, balance: { $gt: order.amount } }, { $inc: { balance: -order.amount } }, { new: true })
        if (userNew) {
            await orderModel.create(order)
            res.send({ msg: userNew })
        }
        else res.send("Insufficient balance")
    }
}

const getOrders = async function (req, res) {
    const orders = await orderModel.find().populate(['userId', 'productId'])
    res.send(orders)
}

module.exports.createOrder = createOrder
module.exports.getOrders = getOrders
