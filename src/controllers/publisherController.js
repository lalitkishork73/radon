const publisherModel = require("../models/publisherModel")

const createPublisher = async function (req, res) {
    let getpublisher = req.body
    let publisher = await publisherModel.create(getpublisher)
    res.send({ data: publisher })
}

const getPublisher = async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({ data: publisher })
}

module.exports.createPublisher = createPublisher
module.exports.getPublisher = getPublisher