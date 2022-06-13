const productModel = require("../models/productModel")

const createProduct = async function (req, res) {
    const data = req.body;
    const createProducts = await productModel.create(data);
    res.send({ msg: createProducts });
}

module.exports.createProduct = createProduct