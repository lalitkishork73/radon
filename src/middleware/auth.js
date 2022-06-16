const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
    
    try {
        jwt.verify(token, "functionup-radon")
        next();
    }
    catch (error) { return res.status(401).send({ status: false, msg: "token is invalid" ,error:error}) }

}

const authorise = function (req, res, next) {

    try {
        let token = req.headers["x-auth-token"];
        let decodedToken = jwt.verify(token, "functionup-radon")
        console.log(decodedToken)
        let userToBeModified = req.params.userId
        let userLoggedIn = decodedToken.userId
        if (userToBeModified != userLoggedIn) {
            return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        } else {
            next();
        }
    } catch (err) {
        res.status(400).send({ msg: err })
    }
}


module.exports.auth = auth
module.exports.authorise = authorise