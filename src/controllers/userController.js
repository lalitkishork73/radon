const UserModel = require("../models/userModel")


const createUser = async function (req, res) {
    let data = req.body;
    data.isfreeappuser = req.headers.isfreeappuser;
    const createUsers = await UserModel.create(data);
    res.send({ msg: createUsers });
}

module.exports.createUser = createUser