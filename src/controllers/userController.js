const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel"); 
const { default: mongoose } = require("mongoose");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp",
    },
    "functionup-radon"
  ); 
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};


const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
  let userId = req.params.userId;
  if (!mongoose.isValidObjectId(userId)) return res.send("No such user exists");
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { age: userData.age } }, { new: true });
  res.send({ status: updatedUser });
};

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  if (!mongoose.isValidObjectId(userId)) return res.send("No such user exists");
  let userData = req.params.userId;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userData }, { $set: { isDeleted: true } }, { new: true });
  res.send({ status: true, data: updatedUser });
}

const postMessage = async function (req, res) {
  let message = req.body.message
  let userToBeModified = req.params.userId

  let user = await userModel.findById(userToBeModified)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  //add the message to user's posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  //return the updated user document
  return res.send({ status: true, data: updatedUser })
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;