const jwt = require("jsonwebtoken");

const auth = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);

    jwt.verify(token, "functionup-radon",
        async function (err, decoded) {
            if (!decoded) {
                return res.send({ status: false, msg: "token is invalid" });
            } else if (err == null) {
                next()
            }
        }
    );
}

const authorise = function (req, res, next) { 

    let token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })
    let decodedToken = jwt.verify(token, 'functionup-radon')
    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    else{
        next()
    }

  
}

module.exports.auth = auth
module.exports.authorise = authorise